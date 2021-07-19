import React, {LegacyRef, RefObject, SyntheticEvent} from 'react';
import Post, {PostType} from './Post/Post';
import s from './MyPosts.module.css';
import {FuncAddPostType} from '../../../App';

const {postsBlock, posts} = s;
export type MyPostsPropsType = {
    postData: PostType[]
    newPostText: string
    dispatch: (action: any) => void
}


const MyPosts = (pr: MyPostsPropsType) => {

    const {postData, newPostText, dispatch} = pr;


    const postComponents = postData.map((t: PostType) => (<Post avatar={t.avatar}
                                                                name={t.name}
                                                                message={t.message}
                                                                time={t.time}
                                                                likes={t.likes}
                                                                id={t.id}
    />))

    let newPostElement: RefObject<HTMLTextAreaElement> | undefined = React.createRef();

    let onPostChange = () => {
        if (newPostElement?.current?.value) {
            let newText = newPostElement.current.value
            let action = {type: 'UPDATE-NEW-POST-TEXT', text: newText};
            dispatch(action);
        }

    }

    let newPost = () => {
        if (newPostText) {
            dispatch({type: 'ADD-POST'});
        }
    }


    return (
        <div className={postsBlock}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                </div>
                <div>
                    <button onClick={newPost}>New post</button>
                </div>
            </div>
            <div className={posts}>
                {postComponents}
            </div>
        </div>
    )
}

export default MyPosts;