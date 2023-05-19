import React from 'react';
import {ProfileInfoType} from '../../../../redux/store';

type ProfileInfoPropsType ={
    profileInfo:ProfileInfoType
}
const ProfileInfo = (props:ProfileInfoPropsType) => {
    let profileInfo = props.profileInfo;
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