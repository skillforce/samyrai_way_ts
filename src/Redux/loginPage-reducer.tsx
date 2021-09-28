import {AuthAPI} from '../API/API';
import {Dispatch} from 'redux';
import {FormDataType} from '../components/Login/LoginForm';
import {stopSubmit} from 'redux-form';
import {getAuthMe} from './Auth-reducer';
import {AppStateType} from './ReduxStore';
import {GetStateType} from './UsersPage-reducer';
import {ThunkAction} from 'redux-thunk';


const LOGIN_USER_TRUE = 'LOGIN_USER_LOGIN_PAGE_TRUE';
const LOGIN_USER_FALSE = 'LOGIN_USER_LOGIN_PAGE_FALSE';


export const logInTrue = (userId: number) => ({type: 'LOGIN_USER_LOGIN_PAGE_TRUE' as const, userId: userId});
export const logInFalse = () => ({type: 'LOGIN_USER_LOGIN_PAGE_FALSE' as const});


type logInTrueType = ReturnType<typeof logInTrue>
type logInFalseType = ReturnType<typeof logInFalse>

type LoginPageActionType = logInFalseType | logInTrueType;


export const logInThunk = (formData: FormDataType):ThunkAction<void, AppStateType, unknown,LoginPageActionType > => {
    return (dispatch,getState) => {
        AuthAPI.login(formData).then(response => {
            if (response.resultCode === 0) {
                dispatch(logInTrue(response.data.userId))
                dispatch(getAuthMe(response.data.userId))
            } else {
                dispatch(stopSubmit('Login', {_error: response.messages}))
            }
        })
    }
}


export const logOutThunk = () => {
    return (dispatch: Dispatch<LoginPageActionType>,getState:GetStateType) => {
        AuthAPI.logOut().then(response => {
            if (response.resultCode === 0) {
                dispatch(logInFalse())
                dispatch(getAuthMe())
            }
        })
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