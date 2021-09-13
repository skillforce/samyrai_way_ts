import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {MaxLengthCreator, requiredField} from '../../../utils/validators';
import {TextArea} from '../../FormsControls/FormsControls';


export const maxLength30 = MaxLengthCreator(30)


export type NewPostMsgType = {
    NewPost: string
}

const PostForm: React.FC<InjectedFormProps<NewPostMsgType>> = (pr) => {


    return (
        <form onSubmit={pr.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength30]}
                       placeholder={'New post...'}
                       name={'NewPost'}
                       type={'text'}
                       component={TextArea}/>
            </div>
            <div>
                <button>New post</button>
            </div>
        </form>
    )
}

const ReduxMyPostForm = reduxForm<NewPostMsgType>({form: 'ProfilePost'})(PostForm)


export default ReduxMyPostForm;