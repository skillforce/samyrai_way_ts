import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from '../../../Redux/ProfilePage-reducer';
import MyPosts from './MyPosts';
import {StateType, StoreType} from '../../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


let mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}



let mapDispatchToProps = (dispatch:Dispatch) => {
    return {updateNewPostText: (text:string) => {
            let action = UpdateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            let action=addPostActionCreator();
            dispatch(action);
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;