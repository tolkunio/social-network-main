import React from 'react';
import {ProfileInfoType} from '../../../../redux/profileReducer';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType;
    status:string;
    updateStatus:(status:string)=>void
}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profileInfo){
        return <Preloader/>
    }
    let {
        fullName,
        aboutMe,
        photos,
        lookingForAJob,
        lookingForAJobDescription,
        contacts,
    } = props.profileInfo;
    return (
        <div>
            <div>
               <h2> {fullName}</h2>
                <p>{aboutMe}</p>
            </div>
            <div>
                <img
                    src={photos.small}/>
            </div>
            <div>{lookingForAJob}</div>
            <div>{lookingForAJobDescription}</div>
            <div>
                {contacts.mainLink}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
};

export default ProfileInfo;