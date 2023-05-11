import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {PostData} from '../../redux/state';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileTypes} from '../../redux/profileReducer';

type ProfileInfoPropsType = {
    message: string,
    posts: PostData[],
    dispatch: (action: ProfileTypes) => void;
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