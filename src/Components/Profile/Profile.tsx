import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {PostData} from '../../redux/state';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type ProfileInfoPropsType={
    message:string,
    posts:PostData[],
    addPost:(postText:string)=>void,
    changeMsgText:(newText:string)=>void;
}

const Profile = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} msgForNewPost={props.message} addPost={props.addPost} changeMessageCallback={props.changeMsgText}/>
        </div>
    );
};

export default Profile;