import React from 'react';
import {
    addNewPostAC,
    changeNewTextAC
} from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {StoreType} from '../../../../redux/redux-store';

type MyPostsContainerPropsType ={
    store:StoreType
}
const MyPostsContainer = (props:MyPostsContainerPropsType) => {
    let posts = props.store.getState().profilePage.posts;
    let newPostText = props.store.getState().profilePage.newPostText;
    const addPostHandler=()=> {
         props.store.dispatch(addNewPostAC());
    }
    const changeMessageHandler=(newMsg:string)=> {
        props.store.dispatch(changeNewTextAC(newMsg));
    }
    return (
     <MyPosts
         posts={posts}
         msgForNewPost={newPostText}
         addPostCallback={addPostHandler}
         changePostCallback={changeMessageHandler}/>
    );
};

export default MyPostsContainer;