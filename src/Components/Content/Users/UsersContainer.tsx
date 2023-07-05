import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    setToggleIsFetching,
    unFollow,
    UserPage,
    UserType
} from '../../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {UserApi} from '../../../api/api';

export type UsersContainerPropsType = {
    users: UserPage,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalUsersCount: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void,
    setToggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        UserApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        UserApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    totalUserCount={this.props.totalUserCount}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalPage={this.props.setTotalUsersCount}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}


type MapStatePropsType = {
    users: UserPage,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalUsersCount: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void,
    setToggleIsFetching: (isFetching: boolean) => void

}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
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
        setToggleIsFetching
    })
(UsersContainer);