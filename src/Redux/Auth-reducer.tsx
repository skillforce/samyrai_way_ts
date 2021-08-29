import {Dispatch} from 'redux';
import {ActionType} from '../../../reactKabzdaKakProsto/my-app/src/components/conAcc/newacc';
import {usersAPI} from '../API/API';


const Set_User_Data = 'SET_USERS_DATA';
const Set_User_Photo = 'SET_USERS_PHOTO';


export const setUsersHeader = (user: InitialStateHeaderType) => ({type: 'SET_USERS_DATA' as const, user: user});
export const setUsersPhotoHeader = (photo: string|null) => ({type: 'SET_USERS_PHOTO' as const, photo});


export const getAuthMe = (photo:string|undefined):any=>{
    return (dispatch:Dispatch<ActionType>)=>{
        usersAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUsersHeader(response.data));
                usersAPI.getPhoto(photo).then((response) => {
                    dispatch(setUsersPhotoHeader(response.data.photos.small));
                });
            }


        });
    }
}

export type AllActionType = 'SET_USERS_DATA'|'SET_USERS_PHOTO'


export type AuthActionType = {
    type: AllActionType,
    user?: InitialStateHeaderType
    photo?: string
}


export type InitialStateHeaderType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    photo:string|undefined
};


let InitialState = {
    id: null,
    login: null,
    email: null,
    photo:undefined,
    isFetching: false
}

const AuthReducer = (state: InitialStateHeaderType = InitialState, action: AuthActionType): InitialStateHeaderType => {
    switch (action.type) {
        case Set_User_Data :
            if (action.user) {
                return {
                    ...state,
                    ...action.user,
                    isFetching: true
                }
            } else {
                return state
            }
        case 'SET_USERS_PHOTO':
           return{
        ...state,
          photo:action.photo
           }
        default:
            return state;
    }
}


export default AuthReducer;