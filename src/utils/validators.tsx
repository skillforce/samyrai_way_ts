import React from 'react'

export type FieldValidatorType = (value: string) => string | undefined


export const MaxLengthCreator = (maxLength: number): FieldValidatorType => {
    return (value) => {
        return value.length < maxLength ? undefined : `the text length has to be lower the ${maxLength} symbols`
    }
}


export const requiredField: FieldValidatorType = (value) => (value ? undefined : 'Please enter the text')
