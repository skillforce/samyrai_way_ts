import React from 'react';
import s from './input.module.css';
import {MessageType} from '../message';


export type InputPropsType = {
    messages: string
}

const Input = (props: InputPropsType) => {
    const {messages} = props;
    return (
        <div>{messages}</div>
    )
}

export default Input;