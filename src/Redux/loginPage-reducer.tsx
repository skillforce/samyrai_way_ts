import {AuthAPI} from '../API/API';
import {Dispatch} from 'redux';
import {FormDataType} from '../components/Login/LoginForm';
import {stopSubmit} from 'redux-form';
import {getAuthMe} from './Auth-reducer';
import {AppStateType} from './ReduxStore';
import {GetStateType} from './UsersPage-reducer';
import {ThunkAction} from 'redux-thunk';


const LOGIN_USER_TRUE = 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_TRUE';
const LOGIN_USER_FALSE = 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_FALSE';


export const logInTrue = (userId: number) => ({
    type: 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_TRUE' as const,
    userId: userId
});
export const logInFalse = () => ({type: 'LoginPageReducer/LOGIN_USER_LOGIN_PAGE_FALSE' as const});


type logInTrueType = ReturnType<typeof logInTrue>
type logInFalseType = ReturnType<typeof logInFalse>

type LoginPageActionType = logInFalseType | logInTrueType;


export const logInThunk = (formData: FormDataType): ThunkAction<void, AppStateType, unknown, LoginPageActionType> => {
    return async (dispatch, getState) => {
        let logInRes = await AuthAPI.login(formData)
        if (logInRes.resultCode === 0) {
            dispatch(logInTrue(logInRes.data.userId))
            dispatch(getAuthMe(logInRes.data.userId))
        } else {
            dispatch(stopSubmit('Login', {_error: logInRes.messages}))
        }
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


let InitialState = {
    logIn: false as string | boolean,
    userId: null as number | null
}

type InitialStateLoginType = typeof InitialState

const loginPageReducer = (state: InitialStateLoginType = InitialState, action: LoginPageActionType): InitialStateLoginType => {
    switch (action.type) {
        case LOGIN_USER_TRUE :
            if (action.userId) {
                return {
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
        default:
            return state;
    }
}


export default loginPageReducer;