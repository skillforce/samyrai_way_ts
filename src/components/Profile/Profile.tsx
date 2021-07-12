import React from 'react';
import MyPosts, {MyPostsPropsType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import {PostType} from './MyPosts/Post/Post';
import {FuncAddPostType} from '../../App';

export type PostDataType = {
    postData: PostType[]
    newPostText: string
}


export type ProfilePropsType = {
    addPost: () => void
    profilePage: PostDataType
    updateNewPostText: (newText: string) => void

}


const Profile = (pr: ProfilePropsType) => {
    const {profilePage} = pr;
    const {updateNewPostText} = pr;
    const {addPost} = pr;
    const {postData, newPostText} = profilePage;

    return (
        <div>
            <ProfileInfo
                src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/188d1124-068d-471a-97e1-25f02ffa310a/d9frxmd-27004519-5a8d-487c-9a0a-6e7384fcceeb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4OGQxMTI0LTA2OGQtNDcxYS05N2UxLTI1ZjAyZmZhMzEwYVwvZDlmcnhtZC0yNzAwNDUxOS01YThkLTQ4N2MtOWEwYS02ZTczODRmY2NlZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7AavSYbGmbnS7pSyDSkFRmiNcfqA7oytsAa6aeKEJSc'}/>
            <MyPosts updateNewPostText={updateNewPostText}
                     newPostText={newPostText}
                     postData={postData}
                     addPost={addPost}/>
        </div>
    )
}

export default Profile;