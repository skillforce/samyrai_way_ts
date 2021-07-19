import React, {MouseEventHandler} from 'react';
import s from './Dialogs.module.css';
import Message, {MessageType} from './message/message';
import DialogItem, {DialogsNamesType} from './dialogItems/dialogItems';
import EnterMessage from './message/EnterMess/EnterMessage';
import {ActionsDispatchType} from '../../Redux/state';

export type DialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType
    newOutputMsgText: string
}

export type DialogsPropsType = {
    state: DialogsType
    dispatch: (action: ActionsDispatchType) => void

}

const {dialogs, messages, dialogsItems, inputTitle} = s;


const Dialogs = (pr: DialogsPropsType) => {

    const {state, dispatch} = pr;

    const {dialogsData, messagesData, newOutputMsgText} = state;
    const {inputMessage, outputMessage} = messagesData;
    const dialogComponents = dialogsData.map((t: DialogsNamesType) => (
        <DialogItem photo={t.photo} id={t.id} name={t.name}/>))

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogComponents}
            </div>
            <div className={messages}>
                <Message inputMessage={inputMessage} outputMessage={outputMessage}/>
            </div>
            <div className={inputTitle}/>
            <EnterMessage newOutputMsgText={newOutputMsgText} dispatch={dispatch}/>
        </div>
    )
}


export default Dialogs;