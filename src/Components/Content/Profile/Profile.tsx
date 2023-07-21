import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfilePageType} from '../../../redux/profileReducer';
type ProfilePropsType={
    profilePage:ProfilePageType,
    status:string,
    updateStatus:(status:string)=>void

}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profilePage.profileInfo}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;