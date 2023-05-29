import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addNewPostAC,
    changeNewTextAC, PostData, ProfileReducerActionType
} from '../../../../redux/profileReducer';

type ProfileInfoPropsType={
    msgForNewPost: string;
    posts:PostData[],
    dispatch:(action:ProfileReducerActionType)=>void,
}
const MyPosts = (props:ProfileInfoPropsType) => {

    let postsDataElement=props.posts.map(post=>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    const addPostHandler=()=> {
         props.dispatch(addNewPostAC());
    }
    const changeMessageHandler=(newMsg:string)=> {
        props.dispatch(changeNewTextAC(newMsg));
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