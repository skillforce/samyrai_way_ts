import React from 'react';
import s from './Post.module.css';

const {item} = s;

type MessageLikesType = {
    message: string
    likes: number
}


const Post: React.FC<MessageLikesType> = ({message, likes}) => {
    return (<div className={item}>
        <img src="https://wl-adme.cf.tsp.li/resize/728x/jpg/d8f/395/cf4c0d577d815b936cc1fb36db.jpg"/>
        {message}
        <div>
            <span>like : {likes}</span>
        </div>
    </div>)
}

export default Post;