import React from 'react';
import s from './MyPosts.module.css';
import {PostData} from '../../../redux/state';
import Post from './Post/Post';
type ProfileInfoPropsType={
    posts:PostData[],
    addPost:(text:string)=>void
}
const MyPosts = (props:ProfileInfoPropsType) => {
    let postMsgRef = React.createRef<HTMLTextAreaElement>();

    let postsDataElement=props.posts.map(post=>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    const addPostHandler=()=> {
        props.addPost(postMsgRef.current? postMsgRef.current.value:'----');
    }

    return (
        <div className="posts">
            <h3>My posts:</h3>
            <div>
                <div>
                    <textarea ref={postMsgRef}></textarea>

                </div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {postsDataElement}
        </div>
    );
};

export default MyPosts;