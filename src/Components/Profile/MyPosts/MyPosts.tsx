import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props:Post) => {

    let postsDataElement=props.map(post=>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);
    return (
        <div className="posts">
            <h3>My posts:</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
            </div>
            {postsDataElement}
        </div>
    );
};

export default MyPosts;