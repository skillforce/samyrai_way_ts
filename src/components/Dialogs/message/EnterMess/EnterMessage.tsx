import React from 'react';
import s from './EnterMessage.module.css';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {TextArea} from '../../../FormsControls/FormsControls';
import {MaxLengthCreator, requiredField} from '../../../../utils/validators';


export type MessageType={
    newMessage:string
}

const {inputTitle, btn, textInput} = s;

const maxLength50=MaxLengthCreator(50)

const EnterMessage: React.FC<InjectedFormProps<MessageType>> = (pr) => {


    return (<form onSubmit={pr.handleSubmit}>
        <div className={inputTitle}>
            <div className={textInput}>
                <Field component={TextArea}
                       validate={[requiredField,maxLength50]}
                       name ={'newMessage'}
                       placeholder={'Enter new message'}/>
            </div>
            <div className={btn}>
                <button>Отправить</button>
            </div>
        </div>
    </form>)
}



export const ReduxEnterMessageForm = reduxForm<MessageType>({form:'Message form'})(EnterMessage)
