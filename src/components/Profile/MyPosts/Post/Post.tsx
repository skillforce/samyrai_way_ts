import React from 'react';
import s from './Post.module.css';
import heart from './heart.png';

const {item, wrapper, userName, messages, times, like} = s;

export type PostType = {
    avatar: string
    name: string
    message: string
    time: string
    likes: number
    id: number
}


const Post: React.FC<PostType> = ({avatar, name, message, time, likes, id}) => {
    return (
        <div key={id} className={item}>
            <img src={avatar} alt={'avatar'}/>
            <div className={wrapper}>
                <div className={userName}>{name}</div>
                <div className={messages}>{message}</div>
                <div className={times}>{time}</div>
                <div className={like}><img src={heart} alt="heart"/>{likes}</div>
            </div>
        </div>
    )

}
export default Post;