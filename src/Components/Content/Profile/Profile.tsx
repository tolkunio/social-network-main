import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../../redux/profileReducer';
type ProfilePropsType={
    profilePage:ProfilePageType,

}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;