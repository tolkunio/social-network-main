import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {PostData} from '../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileTypes} from '../../redux/profileReducer';
import {DialogsType} from '../../redux/dialogsReducer';

type ProfileInfoPropsType = {
    message: string,
    posts: PostData[],
    dispatch: (action:ProfileTypes |DialogsType) => void;
}

const Profile = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                msgForNewPost={props.message}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;