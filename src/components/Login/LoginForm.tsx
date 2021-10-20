import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';
import {createField, InputValid} from '../common/FormsControls/FormsControls';
import {requiredField} from '../../utils/validators';
import {maxLength30} from '../Profile/MyPosts/ReduxMyPostForm';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/ReduxStore';


const {inputField, checkBox, btnLog, form_summary_error} = s;


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const {handleSubmit, error} = props;
    const captchaUrl = useSelector<AppStateType, null | string>(state => state.loginPage.captchaUrl)


    return (<form onSubmit={handleSubmit}>
            <div className={inputField}>
                {createField('email', InputValid, {type: 'text'}, 'email', [requiredField, maxLength30])}
                {createField('password', InputValid, {type: 'text'}, 'password', [requiredField, maxLength30])}
                <div className={checkBox}>
                    {createField('rememberMe', 'input', {type: 'checkbox'}, null, null, 'remember me')}
                </div>

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField('captcha', InputValid, {type: 'text'}, 'Symbols from image', [requiredField])}

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