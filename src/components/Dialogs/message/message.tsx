import React from 'react';
import s from './message.module.css';
import Input from './input/input';
import Output from './output/output';


const {message, inputMess, outputMess, inputMess_mess, outputMess_mess, inputMess_img, outputMess_img} = s;

export type MessageType = {
    id: number
    messages: string
}

const Message = (props: MessageType) => {
    const {messages, id} = props;
    return (
        <div key={id} className={message}>
            <div className={inputMess}>
                <div className={inputMess_img}>
                    <img src="https://www.cartonionline.com/gif/CARTOON/naruto/Naruto-shippuden_01.jpg"/>
                </div>
                <div className={inputMess_mess}>
                    <Input messages={messages}/>
                </div>
            </div>
            <div className={outputMess}>
                <div className={outputMess_mess}>
                    <Output messages={messages}/>
                </div>
                <div className={outputMess_img}>
                    <img src="https://www.cartonionline.com/gif/CARTOON/naruto/Naruto-shippuden_01.jpg"/>
                </div>
            </div>
        </div>)
}

export default Message;