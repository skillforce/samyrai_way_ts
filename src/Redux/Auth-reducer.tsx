import {Dispatch} from 'redux';

import {AuthAPI, usersAPI} from '../API/API';
import {GetStateType} from './UsersPage-reducer';


const Set_User_Data = 'Auth-reducer/SET_USERS_DATA';
const Set_User_Photo = 'Auth-reducer/SET_USERS_PHOTO';


type UserType = {
    id: null | number
    email: string | null
    login: string | null

}


export const setUsersHeader = (user: UserType, isFetching: boolean) => ({
    type: 'Auth-reducer/SET_USERS_DATA' as const,
    user,
    isFetching
});
export const setUsersPhotoHeader = (photo: string | null) => ({type: 'Auth-reducer/SET_USERS_PHOTO' as const, photo});

type SetUsersHeaderType = ReturnType<typeof setUsersHeader>
type setUsersPhotoHeaderType = ReturnType<typeof setUsersPhotoHeader>


export const getAuthMe = (id: number | null = null):any => {
    return async (dispatch: Dispatch<AuthACType>, getState: GetStateType) => {
        let resAuthMe = await AuthAPI.authMe();
        if (resAuthMe.resultCode === 0) {
            dispatch(setUsersHeader(resAuthMe.data, true));
            let resGetPhoto = await usersAPI.getPhoto(id);
            dispatch(setUsersPhotoHeader(resGetPhoto.photos.small));
        } else {
            dispatch(setUsersHeader({
                id: null as null | number,
                login: null as null | string,
                email: null as null | string,
            }, false));
        }
    }
}


export type AuthACType = SetUsersHeaderType | setUsersPhotoHeaderType


export type InitialStateHeaderType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    photo: string | undefined
};


let InitialState = {
    id: null,
    login: null,
    email: null,
    photo: undefined as string | undefined,
    isFetching: false
}

const AuthReducer = (state: InitialStateHeaderType = InitialState, action: AuthACType): InitialStateHeaderType => {
    switch (action.type) {
        case Set_User_Data :
            if (action.user && action.isFetching !== undefined) {
                return {
                    ...state,
                    ...action.user,
                    isFetching: action.isFetching
                }
            } else {
                return state
            }
        case Set_User_Photo:
            if (action.photo) {
                return {
                    ...state,
                    photo: action.photo
                }
            } else {
                return state
            }
        default:
            return state;
    }
}


export default AuthReducer;