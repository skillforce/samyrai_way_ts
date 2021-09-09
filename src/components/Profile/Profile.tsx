import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import {PostType} from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from './ProfileContainer';


export type PostDataType = {
    postData: PostType[]
    newPostText: string
}


const Profile = (props: ProfileType) => {

   return (<div>
        <ProfileInfo updateStatus={props.updateStatus}  status={props.status} profile={props.profile}/>
        <MyPostsContainer/>
    </div>)


}

export default Profile;