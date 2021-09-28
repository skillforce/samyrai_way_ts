import React from 'react';
import s from './FormsControls.module.css';
import {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';


const {formControl, errorS} = s;


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}


type FormControlType = (params: FormControlPropsType) => React.ReactNode


export const FormControl: React.FC<FormControlType> = ({meta: {touched, error}, children}: any) => {

    const showErr = error && touched
    return (<div className={showErr ? formControl + ' ' + errorS : formControl}>
            <div>
                {children}
            </div>
            <div>
                {showErr ? <span>{error}</span> : ''}
            </div>
        </div>
    )
}


export const TextArea: React.FC<WrappedFieldProps> = (pr: any) => {


    const {input, meta, ...restProps} = pr;

    return (<FormControl{...pr}><textarea{...input}{...restProps}/></FormControl>)
}

export const InputValid: React.FC<WrappedFieldProps> = (pr: any) => {

    const {input, meta, ...restProps} = pr;

    return (<FormControl{...pr}><input{...input}{...restProps}/></FormControl>)
}