import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts=[
        {id:1,message:'hi,how are you',likesCount:12},
        {id:2,message:'hi! Its my first post',likesCount:20},
    ];
    let postsDataElement=posts.map(post=>
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