import React from 'react';
import {StoreType} from '../../../../redux/redux-store';

type ProfileInfoPropsType ={
   store:StoreType
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
    let profileInfo = props.store.getState().profilePage.profileInfo
    return (
        <div>
            <div>
                {profileInfo.firstName}{profileInfo.lastName}
            </div>
            <div>
                <img
                    src={profileInfo.avatarImg}/>
            </div>
            <div>
                {profileInfo.birthday}
            </div>
            <div>
                {profileInfo.city}
            </div>
        </div>
    )
};

export default ProfileInfo;