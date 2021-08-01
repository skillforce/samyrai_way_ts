import React, {MouseEventHandler} from 'react';
import s from './Dialogs.module.css';
import Message, {MessageType} from './message/message';
import DialogItem, {DialogsNamesType} from './dialogItems/dialogItems';
import {ActionsDispatchType, StoreType} from '../../Redux/store';
import EnterMessageContainer from './message/EnterMess/EnterMessageContainer';
import StoreContext from '../../StoreContext';

export type DialogsType = {
    dialogsData: DialogsNamesType[]
    messagesData: MessageType
    newOutputMsgText: string
}

export type DialogsPropsType = {
    store: StoreType

}

const {dialogs, messages, dialogsItems, inputTitle} = s;


const Dialogs = () => {

    // const {store} = pr;
    //
    // const {dialogsPage} = store.getState();
    //
    // const {dialogsData, messagesData} = dialogsPage;
    // const {inputMessage, outputMessage} = messagesData;
    // const dialogComponents = dialogsData.map((t: DialogsNamesType) => (
    //     <DialogItem photo={t.photo} id={t.id} name={t.name}/>))

    return (
        <StoreContext.Consumer>
            {(store: any) => {


                let state = store.getState();
                let dialogComponents = state.dialogsPage.dialogsData;

                let dialogComponent = dialogComponents.map((t: DialogsNamesType) => (
                    <DialogItem id={t.id} name={t.name} photo={t.photo}/>));


                return (<div className={dialogs}>
                    <div className={dialogsItems}>
                        {dialogComponent}
                    </div>
                    <div className={messages}>
                        <Message inputMessage={store.getState().dialogsPage.messagesData.inputMessage}
                                 outputMessage={store.getState().dialogsPage.messagesData.outputMessage}/>
                    </div>
                    <div className={inputTitle}/>
                    <EnterMessageContainer store={store}/>
                </div>)
            }
            }
        </StoreContext.Consumer>
    )
}


export default Dialogs;