import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUserAC,
    unFollowAC,
    UserPage,
    UserType
} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import Users from './Users';

export type UsersAPIPropsType = {
    users: UserPage,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true,
            headers:{'API-KEY':'7710dd5f-ea56-47ff-b059-6e7cb78ca047'}})
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalPage(res.data.totalCount)
            });
        console.log(this.props)
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true,
                headers:{'API-KEY':'7710dd5f-ea56-47ff-b059-6e7cb78ca047'}})
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }
    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUserCount={this.props.totalUserCount}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            setTotalPage={this.props.setTotalPage}
            onPageChanged={this.onPageChanged}
        />
    }
}


type MapStatePropsType = {
    users: UserPage,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void

}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage,
        pageSize: state.userPage.pageSize,
        totalUserCount: state.userPage.totalUserCount,
        currentPage: state.userPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUserAC(users));
        },
        setTotalPage: (totalPage: number) => {
            dispatch(setTotalUserCountAC(totalPage));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

export const UsersContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps, mapDispatchToProps)(UsersAPIComponent);