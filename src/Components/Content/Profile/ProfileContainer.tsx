import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {ProfileInfoType, ProfilePageType, setUserProfile} from '../../../redux/profileReducer';
import {RouteComponentProps, withRouter } from 'react-router-dom'
import {ProfileApi} from '../../../api/api';

type PathParamsType={
    userId:string
}
type CommonProfileContainerPropsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>;
type ProfileContainerPropsType= MapStatePropsType & MapDispatchPropsType;
class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        const {setUserProfile,match}=this.props;

        let userId =match.params.userId;
        if(!userId) userId='1';

        ProfileApi.getProfileUserById(userId)
            .then((res) => {
                setUserProfile(res.data)
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>
        )
    }
};
type MapStatePropsType = {
    profilePage:ProfilePageType
}
type MapDispatchPropsType = {
   setUserProfile:(profile: ProfileInfoType)=>void;
}
const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage:state.profilePage
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(
    mapStateToProps,
    {
    setUserProfile
})(WithUrlDataContainerComponent);