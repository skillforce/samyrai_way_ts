import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';


const{inputField,checkBox,btnLog}=s;


export const LoginForm = (props: any) => {

    return (<form onSubmit={props.handleSubmit}>
            <div className={inputField}>
            <div >
                <Field placeholder={'Login'} name={'login'} type={'text'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'text'}/>
            </div>
            </div>
            <div className={checkBox}>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
            </div>
            <div className={btnLog}>
                <button onClick={props.onSubmit}>Log In</button>
            </div>

        </form>
    )
}


export const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm)