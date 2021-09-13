import React from 'react'


export const MaxLengthCreator = (maxLength: number) => {
    return (value: string) => {
        return value.length < maxLength ? undefined : `the text length has to be lower the ${maxLength} symbols`
    }
}


export const requiredField = (value: string) => (value ? undefined : 'Please enter the text')
