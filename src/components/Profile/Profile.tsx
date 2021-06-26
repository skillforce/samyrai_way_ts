import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const{content,item}=s;


const Profile =()=>{
    return(
        <div className={content}>
        <div>
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
        </div>
        <div>
        ava+description
    </div>
    <MyPosts />
    </div>
)
}

export default Profile;