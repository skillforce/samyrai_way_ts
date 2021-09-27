import React from 'react';
import s from './Dialogs.module.css';
import Message from './message/message';
import DialogItem, {DialogsNamesType} from './dialogItems/dialogItems';
import {MessageType, ReduxEnterMessageForm} from './message/EnterMess/EnterMessage';
import {useDispatch} from 'react-redux';
import {AddOutputMsgActionType} from '../../Redux/DialogsPage-reducer';
import {mapDispatchToPropsType, mapStateToPropsDialogsType} from './DialogsContainer';


const {dialogs, messages, dialogsItems, inputTitle} = s;

export type DialogsPropsType = mapStateToPropsDialogsType & mapDispatchToPropsType

const Dialogs = (pr:DialogsPropsType) => {

    const dispatch = useDispatch();


    const onSubmit = (data: MessageType) => {
        dispatch(AddOutputMsgActionType(data.newMessage))

    }


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
        <ReduxEnterMessageForm onSubmit={onSubmit}/>
    </div>)


}

export default Dialogs;