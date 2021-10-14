import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {ProfileResponseType} from '../components/Profile/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI} from '../API/API';
import {AppStateType} from './ReduxStore';
import {GetStateType} from './UsersPage-reducer';
import {ThunkAction} from 'redux-thunk';
import {setUsersPhotoHeader, setUsersPhotoHeaderType} from './Auth-reducer';
import {stopSubmit} from 'redux-form';
import Profile from '../components/Profile/Profile';


const AddPost = 'ProfilePageReducer/ADD-POST';
const SetUsersProfileT = 'ProfilePageReducer/SET-USERS-PROFILE';
const SetUsersStatusT = 'ProfilePageReducer/SET-USERS-STATUS';
const DeletePost = 'ProfilePageReducer/DELETE-POST';
const SavePhoto = 'ProfilePageReducer/SET-USER-NEW-PHOTO';
const SetInitStatus = 'ProfilePageReducer/SET-INIT-STATUS-NEW-PHOTO';
const SetProfileEditMode = 'ProfilePageReducer/SET-PROFILE-SET-MODE';



export const addPost = (text: string) => ({type: 'ProfilePageReducer/ADD-POST' as const, text});
export const deletePost = (postId: number) => ({type: 'ProfilePageReducer/DELETE-POST' as const, postId});
export const SetUsersProfile = (profile: ProfileResponseType) => ({
    type: 'ProfilePageReducer/SET-USERS-PROFILE' as const,
    profile
});
export const SetUsersStatus = (status: string) => ({type: 'ProfilePageReducer/SET-USERS-STATUS' as const, status});
export const savePhotoSuccess = (photoFromServer: { small: string | null, large: string | null }) => ({
    type: 'ProfilePageReducer/SET-USER-NEW-PHOTO' as const,
    photoFromServer
});
export const SetInitializedNewPhotoProfile = (newStatus: boolean) => ({
    type: 'ProfilePageReducer/SET-INIT-STATUS-NEW-PHOTO' as const,
    newStatus
});

export const SetIsProfileSetMode = (newStatus: boolean) => ({
    type: 'ProfilePageReducer/SET-PROFILE-SET-MODE' as const,
    newStatus
})


export type addPostType = ReturnType<typeof addPost>
export type SetUsersProfileType = ReturnType<typeof SetUsersProfile>
type SetUsersStatusType = ReturnType<typeof SetUsersStatus>
type DeletePostType = ReturnType<typeof deletePost>
type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
type SetInitializedNewPhotoProfileType = ReturnType<typeof SetInitializedNewPhotoProfile>
type SetIsProfileSetModeType = ReturnType<typeof SetIsProfileSetMode>



export type SetUsersForProfileType = typeof SetUsersProfile
export type addPostTypeForMyPostContainer = typeof addPost

type ContactsType = {
    facebook: string,
    github: string,
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}

export type TrueFormDataProfileType = { //with aboutMe property
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    AboutMe: string
    contacts: ContactsType
}


export type ProfilePageActionType =
    addPostType
    | SetUsersProfileType
    | SetUsersStatusType
    | DeletePostType
    | savePhotoSuccessType
    | setUsersPhotoHeaderType
    | SetInitializedNewPhotoProfileType
    | SetIsProfileSetModeType


export const getProfile = (userId: number): ThunkAction<void, AppStateType, unknown, ProfilePageActionType> => {
    return async (dispatch: Dispatch<ProfilePageActionType>, getState: GetStateType) => {
        let resGetProfile = await profileAPI.getProfile(userId);
        dispatch(SetUsersProfile(resGetProfile));
    };
}

export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch<ProfilePageActionType>, getState: GetStateType) => {
        let reGetStatus = await profileAPI.getStatus(userId);
        if (reGetStatus != null) {
            dispatch(SetUsersStatus(reGetStatus));
        } else {
            dispatch(SetUsersStatus(''));
        }
    };
}

export const updateStatus = (newStatus: string) => {
    return async (dispatch: Dispatch<SetUsersStatusType>, getState: () => AppStateType) => {
        await profileAPI.updateStatus(newStatus)
        dispatch(SetUsersStatus(newStatus));
    }
}

export const savePhoto = (photo: File) => {
    return async (dispatch: Dispatch<ProfilePageActionType >, getState: () => AppStateType) => {
        dispatch(SetInitializedNewPhotoProfile(false))
        let response = await profileAPI.savePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
            dispatch(setUsersPhotoHeader(response.data.data.photos.small))
            dispatch(SetInitializedNewPhotoProfile(true))
        }

    }
}
export const saveProfile = (profile: TrueFormDataProfileType) => {
    return async (dispatch: Dispatch<ProfilePageActionType & any>, getState: () => AppStateType) => {
        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            const userId=getState().Auth.id
            if(userId!==null) {
                dispatch(getProfile(userId))
            }
         } else {
            const fieldWithError = response.data.messages[0]? response.data.messages[0].slice(30,-1).toLowerCase():null

             switch (fieldWithError){
                 case 'facebook':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'facebook':  'incorrect input in facebook-field'} }))
                     return Promise.reject()
                 case 'vk':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'vk':  'incorrect input in vk-field'} }))
                     return Promise.reject()
                 case 'twitter':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'twitter':  'incorrect input in twitter-field'} }))
                     return Promise.reject()
                 case 'website':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'website':  'incorrect input in website-field'} }))
                     return Promise.reject()
                 case 'youtube':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'youtube':  'incorrect input in youtube-field'} }))
                     return Promise.reject()
                 case 'github':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'github':  'incorrect input in github-field'} }))
                     return Promise.reject()
                 case 'mainLink':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'mainLink':  'incorrect input in mainLink-field'} }))
                     return Promise.reject()
                 case 'instagram':
                       dispatch(stopSubmit('edit_profile', {'contacts':{'instagram':  'incorrect input in instagram-field'} }))
                     return Promise.reject()
                 default :
                     return  dispatch(stopSubmit('edit_profile', {_error: response.data.messages[0]}))
             }

    }

    }
}


let InitialState = {
    postData: [
        {
            avatar: 'https://cdn.shopify.com/s/files/1/1330/6165/products/itachiheadweek_2048x.jpg?v=1623042372',
            name: 'Itachi',
            message: 'How is your project?',
            time: '22:00',
            likes: 15,
            id: 1
        },
        {
            avatar: 'https://wiki.jcdn.ru/w/images/thumb/f/f0/SakuraBorutoMovie.jpg/250px-SakuraBorutoMovie.jpg',
            name: 'Sakura',
            message: 'How are you?',
            time: '23:00',
            likes: 10,
            id: 2
        }, {
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1579004/pub_5f8606849cd6237d30770702_5f8606e6ae6a9712bf6ef638/scale_1200',
            name: 'Saske',
            message: 'What do you do?',
            time: '01:00',
            likes: 7,
            id: 3
        }
    ] as PostType[],
    profile: null as ProfileResponseType | null,
    status: null as string | null,
    initializedNewPhotoProfile: true,
    isProfileSetMode: false
}

export type InitialStateProfileType = typeof InitialState;


export const ProfilePageReducer = (state: InitialStateProfileType = InitialState, action: ProfilePageActionType): InitialStateProfileType => {
    switch (action.type) {
        case AddPost:
            if (action.text) {
                return {
                    ...state, postData: [{
                        avatar: 'https://wiki.jcdn.ru/w/images/thumb/a/a7/Rikudo_second_son.jpg/250px-Rikudo_second_son.jpg',
                        name: 'Indra',
                        message: action.text,
                        time: '12:00',
                        likes: 0,
                        id: 3
                    }, ...state.postData]
                }
            } else {
                return state;
            }
        case SetUsersProfileT:
            return {...state, profile: action.profile}
        case SetUsersStatusT:
            return {...state, status: action.status}
        case DeletePost:
            return {...state, postData: state.postData.filter(t => t.id !== action.postId)}
        case SavePhoto:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photoFromServer
                }
            }
        case SetInitStatus:
            return {...state, initializedNewPhotoProfile: action.newStatus}
        case SetProfileEditMode:
            return {...state, isProfileSetMode: action.newStatus}
        default:
            return state;
    }
}


export default ProfilePageReducer;