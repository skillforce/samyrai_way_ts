import {ActionsDispatchType, StateType} from './state';
import {PostDataType} from '../components/Profile/Profile';

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: AddPost});
export const UpdateNewPostTextActionCreator = (text: string) => ({type: UpdateNewPostText, text: text});


const ProfilePageReducer = (state: PostDataType, action: ActionsDispatchType) => {
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
            state.postData.unshift(newPost);
            state.newPostText = '';
            return state;
        case UpdateNewPostText :
            if (action.text) {
                state.newPostText = action.text;
                return state;
            }
            if (action.text === '') {
                state.newPostText = '';
                return state;
            }
    }
    return state;
}


export default ProfilePageReducer;