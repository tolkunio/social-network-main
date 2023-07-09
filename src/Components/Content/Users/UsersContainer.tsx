import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    setFollowToggleProgress,
    unFollow,
    UserPage,
    UserType
} from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {UserApi} from '../../../api/api';

export type UsersContainerPropsType = {
    users: UserPage,
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalUsersCount: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void,
    setToggleIsFetching: (isFetching: boolean) => void
    setFollowToggleProgress:(followToggleUserId: string, isFetching: boolean)=>void
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        UserApi.getUsers(this.props.users.currentPage, this.props.users.pageSize)
            .then((res) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        UserApi.getUsers(this.props.users.currentPage, this.props.users.pageSize)
            .then((res) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.users.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalPage={this.props.setTotalUsersCount}
                    onPageChanged={this.onPageChanged}
                    followToggleInProgress ={this.props.setFollowToggleProgress}
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
    setUsers: (user: Array<UserType>) => void,
    setTotalUsersCount: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void,
    setToggleIsFetching: (isFetching: boolean) => void,
    setFollowToggleProgress:(followToggleUserId: string, isFetching: boolean) =>void

}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setTotalUsersCount,
        setCurrentPage,
        setToggleIsFetching,
        setFollowToggleProgress
    })
(UsersContainer);