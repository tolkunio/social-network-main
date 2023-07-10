import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {getProfileUserByIdTC, ProfilePageType} from '../../../redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'

type PathParamsType = {
    userId: string
}
type CommonProfileContainerPropsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>;
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        const {getProfileUserByIdTC, match} = this.props;

        let userId = match.params.userId;
        if (!userId) userId = '1';
        getProfileUserByIdTC(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>
        )
    }
};
type MapStatePropsType = {
    profilePage: ProfilePageType,
    isAuth:boolean
}
type MapDispatchPropsType = {
    getProfileUserByIdTC: (userId: string) => void
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        profilePage: state.profilePage,
        isAuth:state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {
        getProfileUserByIdTC
    })(WithUrlDataContainerComponent);