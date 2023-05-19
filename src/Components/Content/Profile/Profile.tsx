import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ActionType, ProfilePageType} from '../../../redux/store';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileInfoPropsType = {
    profileData:ProfilePageType
    dispatch: (action:ActionType) => void;
}

const Profile = (props: ProfileInfoPropsType) => {
    const profileData = props.profileData;
    return (
        <div>
            <ProfileInfo profileInfo={profileData.profileInfo}/>
            <MyPosts
                posts={profileData.posts}
                msgForNewPost={profileData.newPostText}
                dispatch={props.dispatch.bind(profileData)}
            />
        </div>
    );
};

export default Profile;