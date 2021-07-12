import React, {RefObject} from 'react';
import s from './EnterMessage.module.css';


const {inputTitle, btn, textInput} = s;


const EnterMessage = () => {


    const textAreaRef: RefObject<HTMLTextAreaElement> | undefined = React.createRef();

    const alertTack = () => {
        let text = textAreaRef.current?.value;

        alert(text);
    }


    return (
        <div className={inputTitle}>
            <div className={textInput}>
                <textarea ref={textAreaRef}/>
            </div>
            <div className={btn}>
                <button onClick={alertTack}>Отправить</button>
            </div>


        </div>)
}

export default EnterMessage;