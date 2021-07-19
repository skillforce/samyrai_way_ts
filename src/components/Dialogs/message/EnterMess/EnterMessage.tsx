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

    const textAreaRef: RefObject<HTMLTextAreaElement> | undefined = React.createRef();


    const NewOutputMsgTexts = (e: ChangeEvent<HTMLTextAreaElement>) => {

            dispatch(UpdateNewOutputMsgActionType(e.currentTarget.value));

        }
    let newMSG = () => {
        if (newOutputMsgText) {
            dispatch(AddOutputMsgActionType());
        }
    }

    return (
        <div className={inputTitle}>
            <div className={textInput}>
                <textarea onChange={NewOutputMsgTexts} ref={textAreaRef} value={newOutputMsgText}/>
            </div>
            <div className={btn}>
                <button onClick={newMSG}>Отправить</button>
            </div>


        </div>)
}

export default EnterMessage;