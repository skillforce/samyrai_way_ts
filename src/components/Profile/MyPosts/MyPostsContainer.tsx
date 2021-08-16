import React from 'react';
import {ACProfileActionType, addPost, UpdateNewPostText} from '../../../Redux/ProfilePage-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {PostDataType} from '../Profile';
import {stateUsersType} from '../ProfileContainer';

type DispatchPropsMyPostsType={
    UpdateNewPostText:(text: string)=>({type: ACProfileActionType, text: string})
    addPost:() => ({type: ACProfileActionType})
}




let mapStateToProps = (state: stateUsersType): PostDataType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

export type MyPostPropsType = PostDataType & DispatchPropsMyPostsType





const MyPostsContainer = connect(mapStateToProps,{UpdateNewPostText,addPost})(MyPosts);

export default MyPostsContainer;