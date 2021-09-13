import React from 'react';
import s from './message.module.css';
import Input from './input/input';
import Output from './output/output';


const {message, inputMess, outputMess, inputMess_mess, outputMess_mess, inputMess_img, outputMess_img, allMess} = s;

export type MessageType = {
    inputMessage: InputType[]
    outputMessage: OutputType[]
}
export type InputType = {
    id: number
    messages: string
}

export type OutputType = {
    id: number
    messages: string
}


const Message = (props: MessageType) => {

    const {inputMessage, outputMessage} = props;

    const allInputMess = inputMessage.map((t: InputType) => (<div key={t.id} className={inputMess}>
            <div className={inputMess_img}>
                <img src="https://www.cartonionline.com/gif/CARTOON/naruto/Naruto-shippuden_01.jpg" alt={'inputMess'}/>
            </div>
            <div className={inputMess_mess}>
                <Input messages={t.messages}/>
            </div>
        </div>
    ))
    const allOutputMess = outputMessage.map((t: OutputType) => (<div key={t.id} className={outputMess}>
        <div className={outputMess_mess}>
            <Output messages={t.messages}/>
        </div>
        <div className={outputMess_img}>
            <img src="https://klike.net/uploads/posts/2020-09/1601453229_1.jpg" alt={'outputMess'}/>
        </div>
    </div>))

    return (<div className={allMess}>
        <div className={message}>
            {allInputMess}
        </div>
        <div className={message}>
            <div>{allOutputMess}</div>
        </div>
    </div>)
}

export default Message;