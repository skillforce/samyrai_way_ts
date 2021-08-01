import React, {ChangeEvent, RefObject} from 'react';
import s from './EnterMessage.module.css';
import {AddOutputMsgActionType, UpdateNewOutputMsgActionType} from '../../../../Redux/DialogsPage-reducer';
import {StoreType} from '../../../../Redux/store';
import EnterMessage from './EnterMessage';


const {inputTitle, btn, textInput} = s;


type EnterMessagePropsType = {
    store:StoreType
}


const EnterMessageContainer = (pr: EnterMessagePropsType) => {

    const{store}=pr;

    const{dispatch}=store;

    const{dialogsPage}=store.getState();

    const {newOutputMsgText} = dialogsPage;


    const OnNewOutputMsgTexts = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMSG = e.target.value;
        dispatch(UpdateNewOutputMsgActionType(newMSG));
    }


    let OnNewMSG = () => {
        if (newOutputMsgText) {
            dispatch(AddOutputMsgActionType());
        }

    }

    return (
        <EnterMessage OnNewMSG={OnNewMSG} OnNewOutputMsgText={OnNewOutputMsgTexts} newOutputMsgText={newOutputMsgText}/>
    )
}

export default EnterMessageContainer;