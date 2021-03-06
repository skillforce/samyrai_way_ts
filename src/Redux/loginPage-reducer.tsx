import {AuthAPI, securityAPI} from '../API/API';
import {Dispatch} from 'redux';
import {FormDataType} from '../components/Login/LoginForm';
import {stopSubmit} from 'redux-form';
import {getAuthMe} from './Auth-reducer';
import {AppStateType} from './ReduxStore';
import {GetStateType} from './UsersPage-reducer';
import {ThunkAction} from 'redux-thunk';


const LOGIN_USER_TRUE = 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_TRUE';
const LOGIN_USER_FALSE = 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_FALSE';
const SET_CAPTCHA_URL = 'LoginPageReducer/SET_CAPTCHA_URL';


let InitialState = {
    logIn: false as string | boolean,
    userId: null as number | null,
    captchaUrl : null as string|null // if null then captcha is not required
}

type InitialStateLoginType = typeof InitialState

export const logInTrue = (userId: number) => ({
    type: 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_TRUE' as const,
    userId: userId
});
export const logInFalse = () => ({type: 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_FALSE' as const});
export const setCaptchaUrl = (newUrl:string) => ({type: 'LoginPageReducer/SET_CAPTCHA_URL' as const,newUrl});


type logInTrueType = ReturnType<typeof logInTrue>
type setCaptchaUrlType = ReturnType<typeof setCaptchaUrl>
type logInFalseType = ReturnType<typeof logInFalse>

type LoginPageActionType = logInFalseType | logInTrueType| setCaptchaUrlType;


export const logInThunk = (formData: FormDataType): ThunkAction<void, AppStateType, unknown, LoginPageActionType> => {
    return async (dispatch, getState) => {
        let logInRes = await AuthAPI.login(formData)
        if (logInRes.resultCode === 0) {
            // success, get auth data
            dispatch(logInTrue(logInRes.data.userId))
            dispatch(getAuthMe(logInRes.data.userId))
        }
        else {
               if(logInRes.resultCode === 10){
                dispatch(getCaptchaUrl());
            }
            dispatch(stopSubmit('Login', {_error: logInRes.messages}))
        }
    }
}

export const getCaptchaUrl = (): ThunkAction<void, AppStateType, unknown, LoginPageActionType> => {
    return async (dispatch, getState) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url;
        dispatch(setCaptchaUrl(captchaUrl))


    }
}


export const logOutThunk = () => {
    return async (dispatch: Dispatch<LoginPageActionType>, getState: GetStateType) => {
        let logOutRes = await AuthAPI.logOut();
        if (logOutRes.resultCode === 0) {
            dispatch(logInFalse())
            dispatch(getAuthMe())
        }
    }
}




const loginPageReducer = (state: InitialStateLoginType = InitialState, action: LoginPageActionType): InitialStateLoginType => {
    switch (action.type) {
        case LOGIN_USER_TRUE :
            if (action.userId) {
                return {...state,
                    logIn: true,
                    userId: action.userId
                }
            } else {
                return state
            }
        case LOGIN_USER_FALSE :
            return {
                ...state,
                logIn: false
            }
            case SET_CAPTCHA_URL :
            return {
                ...state,
                captchaUrl: action.newUrl
            }
        default:
            return state;
    }
}


export default loginPageReducer;