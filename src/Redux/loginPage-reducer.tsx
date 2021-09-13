import {AuthAPI} from '../API/API';
import {Dispatch} from 'redux';


const LOGIN_USER_TRUE = 'LOGIN_USER_LOGIN_PAGE_TRUE';
const LOGIN_USER_FALSE = 'LOGIN_USER_LOGIN_PAGE_FALSE';


export const logInTrue = (userId: number) => ({type: 'LOGIN_USER_LOGIN_PAGE_TRUE' as const, userId: userId});
export const logInFalse = () => ({type: 'LOGIN_USER_LOGIN_PAGE_FALSE' as const});


export const logInThunk = (formData:any)=>{
    return (dispatch:Dispatch)=>{
        AuthAPI.login(formData).then(response => {
            if (response.resultCode === 0) {
                dispatch(logInTrue(response.data.userId))
                window.location.reload();
            } else {
                dispatch(logInFalse())
            }
        })
    }
}



export type AllActionType = 'LOGIN_USER_LOGIN_PAGE_TRUE' | 'LOGIN_USER_LOGIN_PAGE_FALSE'


export type LoginActionType = {
    type: AllActionType,
    userId?: number
}


export type InitialStateHeaderType = {
    logIn: boolean
    userId: null | number
};


let InitialState = {
    logIn: false,
    userId: null
}

const loginPageReducer = (state: InitialStateHeaderType = InitialState, action: LoginActionType): InitialStateHeaderType => {
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