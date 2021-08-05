import React, {ChangeEvent, RefObject} from 'react';
import s from './EnterMessage.module.css';
import {EnterMessagePropsType} from './EnterMessageContainer';


const {inputTitle, btn, textInput} = s;


const EnterMessage = (pr: EnterMessagePropsType) => {

    const {OnNewMSG, newOutputMsgText, OnNewOutputMsgText} = pr;


    const NewOutputMsgTexts = (e: ChangeEvent<HTMLTextAreaElement>) => {
        OnNewOutputMsgText(e);
    }


    let newMSG = () => {
        OnNewMSG();
    }

    return (
        <div className={inputTitle}>
            <div className={textInput}>
                <textarea onChange={NewOutputMsgTexts} value={newOutputMsgText} placeholder={'Enter your message'}/>
            </div>
            <div className={btn}>
                <button onClick={newMSG}>Отправить</button>
            </div>


        </div>)
}

export default EnterMessage;