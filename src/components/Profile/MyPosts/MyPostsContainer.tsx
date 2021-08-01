import React from 'react';
import {PostType} from './Post/Post';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from '../../../Redux/ProfilePage-reducer';
import {StoreType} from '../../../Redux/store';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


export type MyPostsContainerPropsType = {
    store: StoreType;
}


const MyPostsContainer = () => {

    // const {store} = pr;
    // const {profilePage} = store.getState();
    // const {newPostText, postData} = profilePage;


    return (
        <StoreContext.Consumer>
            {(store: any) => {

                    let state = store.getState();
                    let newPostText = state.profilePage.newPostText;


                    let onPostChange = (text: string) => {
                        if (text) {
                            let action = UpdateNewPostTextActionCreator(text)
                            store.dispatch(action)
                        }
                    }

                    let addPost = () => {
                        if (newPostText) {
                            store.dispatch(addPostActionCreator());
                        }
                    }

                    return <MyPosts postData={store.getState().profilePage.postData}
                                    newPostText={store.getState().profilePage.newPostText}
                                    addPost={addPost} updateNewPostText={onPostChange}/>
                }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;