import React from 'react';
import s from './output.module.css';


export type OutputPropsType = {
    messages: string
}

const Output = (props: OutputPropsType) => {
    const {messages} = props;
    return (
        <div>{messages}</div>)
}

export default Output;