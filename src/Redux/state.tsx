import {DialogsType} from '../components/Dialogs/Dialogs';
import {NavBarPageType} from '../components/Navbar/Navbar';
import {PostDataType} from '../components/Profile/Profile';
import {FriendsPropsType} from '../components/Navbar/SideBar/Friends/Friends';

export type StateType = {
    profilePage: PostDataType
    dialogsPage: DialogsType
    navBarPage: NavBarPageType
    sideBar: FriendsPropsType
}

export type ActionsDispatchType = {
    type: string
    text?: string
}

type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    _addOutputMsg: () => void
    _updateNewOutputMsgText: (newText: string) => void
    subscribe: (observer: (_state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsDispatchType) => void;
}

const AddPost = 'ADD-POST';
const UpdateNewPostText = 'UPDATE-NEW-POST-TEXT';


const UpdateNewOutputMsg = 'UPDATE-NEW-OUTPUT-MSG';
const AddOutputMsg = 'ADD-OUTPUT-MSG';


let store: StoreType = {
    _state: {
        profilePage: {
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
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Denis',
                    photo: 'https://i.pinimg.com/736x/fe/af/c4/feafc4441c41294d5922590a49afea41.jpg'
                },
                {
                    id: 2,
                    name: 'Max',
                    photo: 'https://wiki.jcdn.ru/w/images/thumb/7/78/NarutoSageMode.jpg/170px-NarutoSageMode.jpg'
                },
                {
                    id: 3,
                    name: 'Olga',
                    photo: 'https://naruhina.ru/pics/full/43/u_150615141333719.jpg'
                },
                {
                    id: 4,
                    name: 'Ann',
                    photo: 'https://i.pinimg.com/originals/a7/4f/e9/a74fe9ee87190d4722f33c4088dd84ec.jpg'
                },
                {
                    id: 5,
                    name: 'Andrey',
                    photo: 'https://99px.ru/sstorage/56/2013/08/image_561408130108304153706.jpg'
                },
                {
                    id: 6,
                    name: 'Polina',
                    photo: 'https://pp.userapi.com/c836334/v836334838/4fd0e/ROZ9MDUx9j0.jpg'
                }
            ],
            newOutputMsgText: '',
            messagesData: {
                inputMessage: [
                    {id: 1, messages: 'Hello'},
                    {id: 2, messages: 'Yo'},
                    {id: 3, messages: 'How are you?'},
                    {id: 4, messages: 'What did you do?'},
                    {id: 5, messages: 'What is you name?'},
                    {id: 6, messages: 'Cool!'}
                ],
                outputMessage:
                    [
                        {id: 1, messages: 'Hi!'},
                        {id: 2, messages: 'Yes'},
                        {id: 3, messages: 'and you?'},
                        {id: 4, messages: 'Thanks?'},
                        {id: 5, messages: 'wow!!!?'},
                        {id: 6, messages: 'lalalal'},

                    ]
            },
        },
        navBarPage: {
            navBarLink: [
                {id: 1, link: '/profile', class: 'item', name: 'Профиль'},
                {id: 2, link: '/dialogs', class: 'item', name: 'Сообщения'},
                {id: 3, link: '/news', class: 'item', name: 'Новости'},
                {id: 4, link: '/music', class: 'item', name: 'Музыка'},
            ]
        }
        ,
        sideBar: {
            friendsData: [
                {id: 1, name: 'Pein', src: 'https://www.ninjaturtles.ru/forum/pic/22077.jpg'},
                {id: 2, name: 'Kakashi', src: 'https://99px.ru/sstorage/56/2017/04/mid_275722_9456.jpg'},
                {id: 3, name: 'Naruto', src: 'https://klike.net/uploads/posts/2018-09/1536741383_6.jpg'},
            ]
        }
    },
    _callSubscriber: (state: StateType) => {
    },
    _addPost() {

        let newPost = {
            avatar: 'https://wiki.jcdn.ru/w/images/thumb/a/a7/Rikudo_second_son.jpg/250px-Rikudo_second_son.jpg',
            name: 'Indra',
            message: this._state.profilePage.newPostText,
            time: '12:00',
            likes: 0,
            id: 3
        };

        this._state.profilePage.postData.unshift(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addOutputMsg() {
        let newPost = {
            id: 1,
            messages: this._state.dialogsPage.newOutputMsgText
        }
        this._state.dialogsPage.messagesData.outputMessage =
            [...this._state.dialogsPage.messagesData.outputMessage, newPost];
        this._state.dialogsPage.newOutputMsgText = '';

        this._callSubscriber(this._state);
    },
    _updateNewOutputMsgText(newText: string) {
        if(newText) {
            this._state.dialogsPage.newOutputMsgText = newText;
        }else{
            this._state.dialogsPage.newOutputMsgText = '';
        }
        this._callSubscriber(this._state);
    },
    subscribe(observer: (_state: StateType) => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                avatar: 'https://wiki.jcdn.ru/w/images/thumb/a/a7/Rikudo_second_son.jpg/250px-Rikudo_second_son.jpg',
                name: 'Indra',
                message: this._state.profilePage.newPostText,
                time: '12:00',
                likes: 0,
                id: 3
            };
            this._state.profilePage.postData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.text) {
                this._state.profilePage.newPostText = action.text;

            }
            if (action.text === '') {
                this._state.profilePage.newPostText = '';
            }
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-OUTPUT-MSG') {
            this._addOutputMsg();
        }
        else if (action.type === 'UPDATE-NEW-OUTPUT-MSG') {
            {
                if(action.text) {
                    this._updateNewOutputMsgText(action.text)
                }else{
                    this._updateNewOutputMsgText('')
                }
            }
        }
    }
}


export const addPostActionCreator = () => ({type: AddPost});
export const UpdateNewPostTextActionCreator = (text: string) => ({type: UpdateNewPostText, text: text});
export const UpdateNewOutputMsgActionType = (text: string) => ({type: UpdateNewOutputMsg, text: text});
export const AddOutputMsgActionType = () => ({type: AddOutputMsg});

export default store;