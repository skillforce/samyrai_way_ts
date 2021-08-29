import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {ProfileType} from '../components/Profile/ProfileContainer';
import {Dispatch} from 'redux';
import {ActionType} from '../../../reactKabzdaKakProsto/my-app/src/components/conAcc/newacc';
import {usersAPI} from '../API/API';

const AddPost = 'ADD-POST';
const UpdateNewPostTextT = 'UPDATE-NEW-POST-TEXT';
const SetUsersProfileT = 'SET-USERS-PROFILE';

export type ACProfileActionType = 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'SET-USERS-PROFILE'


export const addPost = () => ({type: 'ADD-POST' as const});
export const UpdateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT' as const, text: text});
export const SetUsersProfile = (profile: ProfileType) => ({type: 'SET-USERS-PROFILE' as const, profile: profile});

export const getProfile = (userId: number): any => {
    return (dispatch: Dispatch<ActionType>) => {
        usersAPI.getUser(userId).then((response) => {
            dispatch(SetUsersProfile(response));
        });
    }
}


export type ActionsDispatchType = {
    type: string
    text?: string
    profile?: ProfileType
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
    newPostText: '',
    profile: null
}

export type InitialStateProfileType = typeof InitialState;


const ProfilePageReducer = (state: InitialStateProfileType = InitialState, action: ActionsDispatchType) => {
    switch (action.type) {
        default:
            return state;
        case AddPost:
            return {
                ...state, postData: [{
                    avatar: 'https://wiki.jcdn.ru/w/images/thumb/a/a7/Rikudo_second_son.jpg/250px-Rikudo_second_son.jpg',
                    name: 'Indra',
                    message: state.newPostText,
                    time: '12:00',
                    likes: 0,
                    id: 3
                }, ...state.postData], newPostText: ''
            }
        case UpdateNewPostTextT:
            if (action.text) {
                return {...state, newPostText: action.text};
            } else {
                return {...state, newPostText: ''};
            }
        case SetUsersProfileT:
            return {...state, profile: action.profile}
    }
}


export default ProfilePageReducer;