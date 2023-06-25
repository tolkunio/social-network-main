import React from 'react';
import style from './Users.module.css'
import axios from 'axios';
import {UserPage, UserType} from '../../../redux/usersReducer';
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
    onPageChanged:(pageNumber:number)=>void
}

export class UsersAPIComponent extends React.Component<UsersAPIPropsType, {}> {
    constructor(props: UsersAPIPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalPage(res.data.totalCount)
            });
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
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