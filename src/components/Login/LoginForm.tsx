import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './LoginForm.module.css';
import {InputValid} from '../FormsControls/FormsControls';
import {requiredField} from '../../utils/validators';
import {maxLength30} from '../Profile/MyPosts/ReduxMyPostForm';



const{inputField,checkBox,btnLog,form_summary_error}=s;


export type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}



export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (<form onSubmit={props.handleSubmit}>
            <div className={inputField}>

            <div >
                <Field validate={[requiredField,maxLength30]} placeholder={'email'} name={'email'} type={'text'} component={InputValid}/>

            </div>
            <div>
                <Field validate={[requiredField,maxLength30]} placeholder={'password'} name={'password'} component={InputValid} type={'text'}/>
            </div>
            </div>
            <div className={checkBox}>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>remember me
            </div>
            {props.error? <div className={form_summary_error}>
                {props.error}
            </div>:''}

            <div className={btnLog}>
                <button>Log In</button>
            </div>

        </form>
    )
}


export const ReduxLoginForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)