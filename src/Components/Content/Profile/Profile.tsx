import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../../redux/redux-store';

type ProfileInfoPropsType = {
    store:StoreType
}

const Profile = (props: ProfileInfoPropsType) => {
    let profileData = props.store.getState().profilePage;
    return (
        <div>
            <ProfileInfo store={props.store}/>
            <MyPosts
                posts={profileData.posts}
                msgForNewPost={profileData.newPostText}
                dispatch={props.store.dispatch.bind(profileData)}
            />
        </div>
    );
};

export default Profile;