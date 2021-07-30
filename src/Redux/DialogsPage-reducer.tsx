import {ActionsDispatchType, StateType} from './state';
import {DialogsType} from '../components/Dialogs/Dialogs';

const UpdateNewOutputMsg = 'UPDATE-NEW-OUTPUT-MSG';
const AddOutputMsg = 'ADD-OUTPUT-MSG';

export const UpdateNewOutputMsgActionType = (text: string) => ({type: UpdateNewOutputMsg, text: text});
export const AddOutputMsgActionType = () => ({type: AddOutputMsg});


const DialogsPageReducer = (state: DialogsType, action: ActionsDispatchType) => {
    switch (action.type) {
        default:
            return state;
        case AddOutputMsg:
            let newPost = {
                id: 1,
                messages: state.newOutputMsgText
            }
            state.messagesData.outputMessage =
                [...state.messagesData.outputMessage, newPost];
            state.newOutputMsgText = '';
            return state;
        case UpdateNewOutputMsg:
            if (action.text) {
                state.newOutputMsgText = action.text;
                return state;
            } else {
                state.newOutputMsgText = '';
                return state;
            }
    }
    return state;
}

export default DialogsPageReducer;