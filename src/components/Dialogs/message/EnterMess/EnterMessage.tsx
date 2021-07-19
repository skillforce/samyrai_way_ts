import React, {ChangeEvent, RefObject} from 'react';
import s from './EnterMessage.module.css';


const {inputTitle, btn, textInput} = s;


type EnterMessagePropsType = {
    dispatch:(action: any) =>  React.MouseEventHandler<HTMLButtonElement> | undefined
    newOutputMsgText: string
}

const EnterMessage = (pr: EnterMessagePropsType) => {

    const {dispatch, newOutputMsgText} = pr;

    const textAreaRef: RefObject<HTMLTextAreaElement> | undefined = React.createRef();


    const NewOutputMsgTexts = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type:"UPDATE-NEW-OUTPUT-MSG", text:e.currentTarget.value});
    }
    let newMSG = () => {
        if (newOutputMsgText) {
            dispatch({type: 'ADD-OUTPUT-MSG'});
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