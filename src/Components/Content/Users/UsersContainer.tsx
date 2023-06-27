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
import {Dispatch} from 'redux';
import axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

export type UsersAPIPropsType = {
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

export class UsersAPIComponent extends React.Component<UsersAPIPropsType, {}> {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
            })
            .then((res) => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
            })
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
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId));
        },
        unFollow: (userId: string) => {
            dispatch(unFollow(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsers(users));
        },
        setTotalUsersCount: (totalPage: number) => {
            dispatch(setTotalUsersCount(totalPage));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage));
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetching(isFetching));
        }
    }
}

export const UsersContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps,
        {
            follow,
            unFollow,
            setUsers,
            setTotalUsersCount,
            setCurrentPage,
            setToggleIsFetching
        })
    (UsersAPIComponent);