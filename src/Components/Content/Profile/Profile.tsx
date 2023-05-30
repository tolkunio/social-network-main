import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfileInfoPropsType = {
    store:StoreType
}

const Profile = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <ProfileInfo store={props.store}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;