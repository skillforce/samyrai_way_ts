import React from 'react';


export type OutputPropsType = {
    messages: string
}

const Output = (props: OutputPropsType) => {
    const {messages} = props;
    return (
        <div>{messages}</div>)
}

export default Output;