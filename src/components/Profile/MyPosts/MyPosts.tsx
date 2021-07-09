import React from 'react';
import Post, {PostType} from './Post/Post';
import s from './MyPosts.module.css';

const {postsBlock, posts} = s;
export type MyPostsPropsType = {
    postData: PostType[]
}


const MyPosts = (pr: MyPostsPropsType) => {

    const {postData} = pr;


    const postComponents = postData.map((t: PostType) => (<Post avatar={t.avatar}
                                                                name={t.name}
                                                                message={t.message}
                                                                time={t.time}
                                                                likes={t.likes}
                                                                id={t.id}
    />))
    return (
        <div className={postsBlock}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={posts}>
                {postComponents}
            </div>
        </div>
    )
}

export default MyPosts;