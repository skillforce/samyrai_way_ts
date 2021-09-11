import React from 'react';
import {Field, reduxForm} from 'redux-form';


export const LoginForm = (props: any) => {

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} type={'text'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'text'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button onClick={props.onSubmit}>LOGIN IN!</button>
            </div>
        </form>
    )
}


export const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm)