import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';
import {createField, InputValid} from '../common/FormsControls/FormsControls';
import {requiredField} from '../../utils/validators';
import {maxLength30} from '../Profile/MyPosts/ReduxMyPostForm';


const {inputField, checkBox, btnLog, form_summary_error} = s;


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props;


    return (<form onSubmit={handleSubmit}>
            <div className={inputField}>
                {createField('email', InputValid, {type: 'text'}, 'email', [requiredField, maxLength30])}
                {createField('password', InputValid, {type: 'text'}, 'password', [requiredField, maxLength30])}
                <div className={checkBox}>
                    {createField('rememberMe', 'input', {type: 'checkbox'}, null, null, 'remember me')}
                </div>
                {error ? <div className={form_summary_error}>
                    {error}
                </div> : ''}
                <div className={btnLog}>
                    <button>Log In</button>
                </div>
            </div>
        </form>
    )
}


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)