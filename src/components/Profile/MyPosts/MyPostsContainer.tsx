import React from 'react';
import {addPost, UpdateNewPostText} from '../../../Redux/ProfilePage-reducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {PostDataType} from '../Profile';


let mapStateToProps = (state: AppStateType): PostDataType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

export type MyPostPropsType = PostDataType & DispatchType

let Dispatch = {
    UpdateNewPostText,
    addPost
}


type DispatchType = typeof  Dispatch;




const MyPostsContainer = connect(mapStateToProps,{UpdateNewPostText,addPost})(MyPosts);

export default MyPostsContainer;