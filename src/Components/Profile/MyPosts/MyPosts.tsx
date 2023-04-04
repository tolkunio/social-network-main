import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="posts">
            My posts
            <Post title={"title1"}/>
            <Post title={"title2"}/>
            <Post title={"title3 "}/>
        </div>
    );
};

export default MyPosts;