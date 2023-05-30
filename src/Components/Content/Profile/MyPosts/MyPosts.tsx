import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
const MyPosts = (props:MyPostsPropsType) => {
    let postsDataElement=props.profilePage.posts.map(post=>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    return (
        <div className="posts">
            <h3>My posts:</h3>
            <div>
                <div>
                    <textarea onChange={e=>props.changePostCallback(e.currentTarget.value)}
                              value={props.msgForNewPost}/>
                </div>
                <button onClick={props.addPostCallback}>Add Post</button>
            </div>
            {postsDataElement}
        </div>
    );
};

export default MyPosts;