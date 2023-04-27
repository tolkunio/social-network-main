import React from 'react';
import s from './MyPosts.module.css';
import {PostData} from '../../../redux/state';
import Post from './Post/Post';
type ProfileInfoPropsType={
    msgForNewPost: string;
    posts:PostData[],
    addPost:(text:string)=>void,
    changeMessageCallback:(newMsg:string)=>void
}
const MyPosts = (props:ProfileInfoPropsType) => {

    let postsDataElement=props.posts.map(post=>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    const addPostHandler=()=> {
        props.addPost(props.msgForNewPost);
    }
    const changeMessageHandler=(newMsg:string)=> {
        props.changeMessageCallback(newMsg);
    }
    return (
        <div className="posts">
            <h3>My posts:</h3>
            <div>
                <div>
                    <textarea onChange={e=>changeMessageHandler(e.currentTarget.value)}
                              value={props.msgForNewPost}/>

                </div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {postsDataElement}
        </div>
    );
};

export default MyPosts;