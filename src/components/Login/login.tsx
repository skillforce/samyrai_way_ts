import React from 'react';
import {FormDataType, ReduxLoginForm} from './LoginForm';
import s from './login.module.css';
import login1 from '../../img/log1.png';
import login2 from '../../img/log2.png';
import login3 from '../../img/log3.png';
import login4 from '../../img/log4.png';
import {logInThunk} from '../../Redux/loginPage-reducer';
import {useDispatch} from 'react-redux';

const {loginPage, loginImg1, loginImg2, loginImg3, loginImg4} = s;


export const Login = () => {

    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
      dispatch(logInThunk(formData))
    }


    return (

            <div className={loginPage}>
                <div className={loginImg1}><img src={login1} alt="loginPageImg1"/></div>
                <div className={loginImg2}><img src={login2} alt="loginPageImg2"/></div>
                <div className={loginImg3}><img src={login3} alt="loginPageImg3"/></div>
                <div className={loginImg4}><img src={login4} alt="loginPageImg3"/></div>
                <span>Log In</span>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>
    )
}


