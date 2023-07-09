import React from 'react';
import style from './Users.module.css';
import {UserPage, UserType} from '../../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import {UserApi} from '../../../api/api';

type UserPropsType = {
    users: UserPage,
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void,
    followToggleInProgress: (followToggleUserId: string, isFetching: boolean) => void
}
const Users = (props: UserPropsType) => {
    let pages = [];
    let pagesCount = Math.ceil(props.users.totalUserCount / props.users.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let indexOfCurrentPage = pages.indexOf(props.users.currentPage);
    let pagesOk = pages.slice(props.users.currentPage >= 7 ? indexOfCurrentPage - 7 : 0, indexOfCurrentPage + 7);
    return (
        <div>
            <div>
                {pagesOk.map(p => {
                    return <span className={props.users.currentPage === p ? style.activePage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>
                        {p}
                    </span>
                })}
            </div>

            {props.users.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={`profile/${u.id}`}>
                        <img className={style.photo} src={u.photos.small}/>
                    </NavLink>
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>
                    {
                        u.followed
                            ? <button disabled={props.users.followedToggleUsersId.some(id=>id!==u.id)} onClick={
                                () => {
                                    props.followToggleInProgress(u.id,true);
                                    UserApi.unfollow(u.id)
                                        .then(
                                            res => {
                                                if (res.data.resultCode == 0) {
                                                    props.unFollow(u.id)
                                                }
                                                props.followToggleInProgress(u.id,false);
                                            }
                                        );
                                }
                            }>
                                UnFollow
                            </button>
                            : <button disabled={props.users.followedToggleUsersId.some(id=>id!==u.id)} onClick={() => {
                                props.followToggleInProgress(u.id,true);
                                UserApi.follow(u.id)
                                    .then(
                                        res => {
                                            if (res.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.followToggleInProgress(u.id,false);
                                        }
                                    );
                            }}>Follow</button>
                    }
                </div>
            </div>)
            }
        </div>
    );
};

export default Users;