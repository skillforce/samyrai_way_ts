import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const{content,item}=s;


const MyPosts =()=>{
    return(
        <div>
            My post
    <div>
    New post
    </div>
    <div className='posts'>
    <Post message={'Hi, how are you?'} likes ={15} />
    <Post message={'It\'s my first message'} likes={21} />
    </div>
    </div>
)
}

export default MyPosts;