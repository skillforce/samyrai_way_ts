import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from './ProfileContainer';


export type PostDataType = {
    postData: PostType[]
}


const Profile = (props: ProfileType) => {

    return (<div>
        <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
        <MyPostsContainer/>
    </div>)


}

export default Profile;