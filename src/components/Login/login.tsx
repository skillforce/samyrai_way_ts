import React from 'react';
import {ReduxLoginForm} from './LoginForm';


export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (<div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )

}


