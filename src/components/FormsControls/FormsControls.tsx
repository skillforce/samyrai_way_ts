import React from 'react';
import s from './FormsControls.module.css';


const {formControl, error} = s;


export const FormControl = ({input, meta, child, ...props}:any) => {

    const showErr = meta.error && meta.touched
    return (<div className={showErr ? formControl + ' ' + error : formControl}>
            <div>
                {props.children}
            </div>
            <div>
                {showErr ? <span>{meta.error}</span> : ''}
            </div>
        </div>
    )
}


export const TextArea = (pr: any) => {


    const {input, meta, ...restProps} = pr;

    return (<FormControl{...pr}><textarea{...input}{...pr}/></FormControl>)
}

export const InputValid = (pr: any) => {


    const {input, meta, ...restProps} = pr;

    return (<FormControl{...pr}><input{...input}{...pr}/></FormControl>)
}