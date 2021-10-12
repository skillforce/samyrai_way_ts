import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from './ProfileContainer';



export type PostDataType = {
    postData: PostType[]
}


const Profile = (props:ProfileType) => {
    const {updateStatus, status, profile, isOwner,savePhoto} = props
    return (<div>
        <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} updateStatus={updateStatus} status={status} profile={profile}/>
        <MyPostsContainer/>
    </div>)
}

export default Profile;