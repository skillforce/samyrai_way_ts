import React from 'react';
import s from './Dialogs.module.css';
import Message, {MessageType} from './message/message';
import DialogItem, {DialogsNamesType} from './dialogItems/dialogItems';
import EnterMessage from './message/EnterMess/EnterMessage';

export type DialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType[]
}

export type DialogsPropsType = {
    state: DialogsType
}

const {dialogs, messages, dialogsItems, inputTitle} = s;


const Dialogs = (pr: DialogsPropsType) => {

    const {state} = pr;

    const {dialogsData, messagesData} = state;
    const dialogComponents = dialogsData.map((t: DialogsNamesType) => (
        <DialogItem photo={t.photo} id={t.id} name={t.name}/>))
    const messageComponents = messagesData.map((t: MessageType) => (<Message id={t.id} messages={t.messages}/>))


    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogComponents}
            </div>
            <div className={messages}>
                {messageComponents}
            </div>
            <div className={inputTitle}></div>
            <EnterMessage/>
        </div>
    )
}


export default Dialogs;