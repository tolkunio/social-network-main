import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {ActionsTypes, PostData} from '../../redux/state';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileInfoPropsType = {
    message: string,
    posts: PostData[],
    dispatch: (action: ActionsTypes) => void;
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