import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    setFollowToggleProgress,
    unFollowSuccess,
    UserPage,
    UserType, getUsersTC, onPageChangedTC, followTC, unFollowTC
} from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {Dispatch} from 'redux';

export type UsersContainerPropsType = {
    users: UserPage,
    getUsersTC: (currentPage: number, pageSize: number) =>void,
    onPageChangedTC:(pageNumber: number, pageSize: number) => void,
    followTC: (userId:string) => void;
    unFollowTC: (userId:string) => void;
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.getUsersTC(this.props.users.currentPage,this.props.users.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedTC(pageNumber,this.props.users.pageSize);
    }

    render() {
        return (
            <>
                {this.props.users.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    follow={this.props.followTC}
                    unFollow={this.props.unFollowTC}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}


type MapStatePropsType = {
    users: UserPage,
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => (dispatch: Dispatch) =>void
    onPageChangedTC:(pageNumber: number, pageSize: number) =>(dispatch: Dispatch)=> void,
    followTC: (userId:string) => void;
    unFollowTC: (userId:string) => void;

}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.userPage
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>
(mapStateToProps,
    {
        follow: followSuccess,
        unFollow: unFollowSuccess,
        getUsersTC,
        onPageChangedTC,
        followTC,
        unFollowTC
    })
(UsersContainer);