import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {getProfileUserByIdTC, getStatusTC, ProfilePageType, updateStatusTC} from '../../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {WithAuthRedirect} from '../../../hoc/WithAuthRedirect';

type PathParamsType = {
    userId: string
}
type CommonProfileContainerPropsType = ProfileContainerPropsType & RouteComponentProps<PathParamsType>;
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<CommonProfileContainerPropsType> {
    componentDidMount() {
        const {getProfileUserByIdTC, match,getStatusTC} = this.props;

        let userId = match.params.userId;
        if (!userId) userId = '1';
        getProfileUserByIdTC(userId);
        getStatusTC(userId);

    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profilePage={this.props.profilePage}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusTC}
                />
            </div>
        )
    }
};
type MapStatePropsType = {
    profilePage: ProfilePageType,
    status:string
}
type MapDispatchPropsType = {
    getProfileUserByIdTC: (userId: string) => void,
    getStatusTC:(userId:string) =>void,
    updateStatusTC:(status:string)=>void
}
const mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        status:state.profilePage.status
    }
}
const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default WithAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
    mapStateToProps,
    {
        getProfileUserByIdTC,
        getStatusTC,
        updateStatusTC
    })(WithUrlDataContainerComponent));


// export default compose(
//     connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(
//         mapStateToProps,
//         {
//             getProfileUserByIdTC
//         }),
//     withAuthRedirect,
//     withRouter,
// )
// (ProfileContainer)
