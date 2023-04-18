import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {PostData} from '../../redux/state';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type ProfileInfoPropsType={
    posts:PostData[],
    addPost:(postText:string)=>void,
}

const Profile = (props:ProfileInfoPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;