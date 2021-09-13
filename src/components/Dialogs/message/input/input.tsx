import React from 'react';



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