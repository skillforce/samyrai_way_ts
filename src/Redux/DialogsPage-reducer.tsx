import {DialogsNamesType} from '../components/Dialogs/dialogItems/dialogItems';
import {InputType, OutputType} from '../components/Dialogs/message/message';
import {ActionsDispatchType} from './ProfilePage-reducer';

const UpdateNewOutputMsg = 'UPDATE-NEW-OUTPUT-MSG';
const AddOutputMsg = 'ADD-OUTPUT-MSG';

export const UpdateNewOutputMsgActionType = (text: string) => ({type: UpdateNewOutputMsg, text: text});
export const AddOutputMsgActionType = () => ({type: AddOutputMsg});

let InitialState = {
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
    ] as Array<DialogsNamesType>,
    newOutputMsgText: '',
    messagesData: {
        inputMessage: [
            {id: 1, messages: 'Hello'},
            {id: 2, messages: 'Yo'},
            {id: 3, messages: 'How are you?'},
            {id: 4, messages: 'What did you do?'},
            {id: 5, messages: 'What is you name?'},
            {id: 6, messages: 'Cool!'}
        ] as Array<InputType>,
        outputMessage:
            [
                {id: 1, messages: 'Hi!'},
                {id: 2, messages: 'Yes'},
                {id: 3, messages: 'and you?'},
                {id: 4, messages: 'Thanks?'},
                {id: 5, messages: 'wow!!!?'},
                {id: 6, messages: 'lalalal'}
            ] as Array<OutputType>
    },
}

export type InitialStateDialogsType = typeof InitialState;


const DialogsPageReducer = (state: InitialStateDialogsType = InitialState, action: ActionsDispatchType): InitialStateDialogsType => {
    switch (action.type) {
        default:
            return state;
        case AddOutputMsg:
            if (state.newOutputMsgText) {
                return state = {
                    ...state, messagesData: {
                        ...state.messagesData, outputMessage:
                            [...state.messagesData.outputMessage, {id: 1, messages: state.newOutputMsgText}]
                    },
                    newOutputMsgText: ''
                }
            } else
                return state
        case UpdateNewOutputMsg:
            if (action.text) {
                state = {...state, newOutputMsgText: action.text};
                return state;
            } else {
                state = {...state, newOutputMsgText: ''};
                return state;
            }
    }
    return state;
}

export default DialogsPageReducer;