import React from 'react';
import s from './Dialogs.module.css';
import Message, {MessageType} from './message/message';
import DialogItem, {DialogsNamesType} from './dialogItems/dialogItems';
import EnterMessageContainer from './message/EnterMess/EnterMessageContainer';


export type DialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType
    newOutputMsgText:string|''
}


const {dialogs, messages, dialogsItems, inputTitle} = s;


const Dialogs = (pr: DialogsType) => {

    const {dialogsData, messagesData} = pr;
    const {inputMessage, outputMessage} = messagesData;
    const dialogComponents = dialogsData.map((t: DialogsNamesType) => (
        <DialogItem photo={t.photo} id={t.id} name={t.name}/>))

    return (<div className={dialogs}>
        <div className={dialogsItems}>
            {dialogComponents}
        </div>
        <div className={messages}>
            <Message inputMessage={inputMessage}
                     outputMessage={outputMessage}/>
        </div>
        <div className={inputTitle}/>
        <EnterMessageContainer />
    </div>)
}


export default Dialogs;