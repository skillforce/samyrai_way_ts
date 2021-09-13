import React from 'react';
import Post, {PostType} from './Post/Post';
import s from './MyPosts.module.css';
import {MyPostPropsType} from './MyPostsContainer';
import ReduxMyPostForm, {NewPostMsgType} from './ReduxMyPostForm';

const {postsBlock, posts} = s;

const MyPosts = (pr: MyPostPropsType) => {

    const {postData, addPost} = pr;


    const postComponents = postData ? postData.map((t: PostType) => (<Post key={t.id}
                                                                           avatar={t.avatar}
                                                                           name={t.name}
                                                                           message={t.message}
                                                                           time={t.time}
                                                                           likes={t.likes}
                                                                           id={t.id}
    />)) : ''


    const onSubmit = (data: NewPostMsgType) => {
        addPost(data.NewPost)
    }


    return (
        <div className={postsBlock}>
            <h3> My post </h3>
            <div>
                <ReduxMyPostForm onSubmit={onSubmit}/>
            </div>
            <div className={posts}>
                {postComponents}
            </div>
        </div>
    )
}

export default MyPosts;