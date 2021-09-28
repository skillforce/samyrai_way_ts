import {Dispatch} from 'redux';

import {AuthAPI, usersAPI} from '../API/API';


const Set_User_Data = 'SET_USERS_DATA';
const Set_User_Photo = 'SET_USERS_PHOTO';


type UserType = {
    id: null|number
    email: string|null
    login: string|null

}


export const setUsersHeader = (user: UserType, isFetching: boolean) => ({
    type: 'SET_USERS_DATA' as const,
    user,
    isFetching
});
export const setUsersPhotoHeader = (photo: string | null) => ({type: 'SET_USERS_PHOTO' as const, photo});

type SetUsersHeaderType = ReturnType<typeof setUsersHeader>
type setUsersPhotoHeaderType = ReturnType<typeof setUsersPhotoHeader>


export const getAuthMe = (id: number | null =null): any => {
    debugger
    return (dispatch: Dispatch<AuthACType>) => {
        return AuthAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUsersHeader(response.data, true));
                usersAPI.getPhoto(id).then((response) => {
                    dispatch(setUsersPhotoHeader(response.photos.small));
                });
            } else {
                dispatch(setUsersHeader({
                    id: null as null|number,
                    login: null as null|string,
                    email: null as null|string,
                }, false));
            }
        });
    }
}


export type AllActionType = 'SET_USERS_DATA' | 'SET_USERS_PHOTO'

type AuthACType = SetUsersHeaderType | setUsersPhotoHeaderType

export type AuthActionType = {
    type: AllActionType,
    user?: InitialStateHeaderType
    photo?: string
    isFetching?: boolean
}


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