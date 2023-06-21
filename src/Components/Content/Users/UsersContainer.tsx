import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {followAC, setUserAC, unFollowAC, UserPage, UserType} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import Users from './Users';

type MapStatePropsType = {
    users: UserPage
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUser: (user: Array<UserType>) => void,

}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage
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
        setUser: (users: UserType[]) => {
            dispatch(setUserAC(users));
        }
    }
}

export const UsersContainer =
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps, mapDispatchToProps)(Users);