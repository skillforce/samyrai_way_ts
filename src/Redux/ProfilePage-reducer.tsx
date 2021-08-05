import {ActionsDispatchType, StateType} from './store';
import {PostDataType} from '../components/Profile/Profile';
import {PostType} from '../components/Profile/MyPosts/Post/Post';

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: AddPost});
export const UpdateNewPostTextActionCreator = (text: string) => ({type: UpdateNewPostText, text: text});


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
    newPostText: ''
}

type InitialStateProfileType = typeof InitialState;


const ProfilePageReducer = (state: InitialStateProfileType = InitialState, action: ActionsDispatchType) => {
    switch (action.type) {
        default:
            return state;
        case AddPost:
            let newPost = {
                avatar: 'https://wiki.jcdn.ru/w/images/thumb/a/a7/Rikudo_second_son.jpg/250px-Rikudo_second_son.jpg',
                name: 'Indra',
                message: state.newPostText,
                time: '12:00',
                likes: 0,
                id: 3
            };
            state = {...state, postData: [newPost, ...state.postData]};
            state.newPostText = '';
            return state;
        case UpdateNewPostText :
            if (action.text) {
                state = {...state, newPostText: action.text};
                return state;
            }
            if (action.text === '') {
                state = {...state, newPostText: ''};
                return state;
            }
    }
    return state;
}


export default ProfilePageReducer;