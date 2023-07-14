import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {getProfileUserByIdTC, ProfilePageType} from '../../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom'
import WithAuthRedirect from '../../../hoc/WithAuthRedirect';

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
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>
        )
    }
};

type MapStatePropsType = {
    profilePage: ProfilePageType,
}
type MapDispatchPropsType = {
    getProfileUserByIdTC: (userId: string) => void
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        profilePage: state.profilePage,
    }
}
const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default WithAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {
        getProfileUserByIdTC
    })(WithUrlDataContainerComponent));