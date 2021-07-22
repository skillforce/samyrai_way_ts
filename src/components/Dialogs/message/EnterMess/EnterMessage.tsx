import React, {ChangeEvent, RefObject} from 'react';
import s from './EnterMessage.module.css';
import {AddOutputMsgActionType, UpdateNewOutputMsgActionType} from '../../../../Redux/state';


const {inputTitle, btn, textInput} = s;


type EnterMessagePropsType = {
    dispatch: (action: any) => void
    newOutputMsgText: string
}


const EnterMessage = (pr: EnterMessagePropsType) => {

    const {dispatch, newOutputMsgText} = pr;


    const NewOutputMsgTexts = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMSG = e.target.value;
        dispatch(UpdateNewOutputMsgActionType(newMSG));
    }


    let newMSG = () => {
        if (newOutputMsgText) {
            dispatch(AddOutputMsgActionType());
        }

    }

    return (
        <div className={inputTitle}>
            <div className={textInput}>
                <textarea onChange={NewOutputMsgTexts} value={newOutputMsgText}/>
            </div>
            <div className={btn}>
                <button onClick={newMSG}>Отправить</button>
            </div>


        </div>)
}

export default EnterMessage;