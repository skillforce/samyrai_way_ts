import React, {RefObject} from 'react';
import Post, {PostType} from './Post/Post';
import s from './MyPosts.module.css';
import {MyPostPropsType} from './MyPostsContainer';

const {postsBlock, posts} = s;

const MyPosts = (pr: MyPostPropsType) => {

    const {postData, newPostText,UpdateNewPostText,addPost} = pr;


    const postComponents = postData? postData.map((t: PostType) => (<Post avatar={t.avatar}
                                                                name={t.name}
                                                                message={t.message}
                                                                time={t.time}
                                                                likes={t.likes}
                                                                id={t.id}
    />)): ''

    let newPostElement: RefObject<HTMLTextAreaElement> | undefined = React.createRef();

    let onPostChange = () => {
        if (newPostElement?.current?.value) {
            let newText = newPostElement.current.value;
            UpdateNewPostText(newText);
        } else {
            UpdateNewPostText('');
        }

    }

    let newPost = () => {
        if (newPostText) {
            addPost();
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