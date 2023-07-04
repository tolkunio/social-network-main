import React from 'react';
import style from './Users.module.css';
import {UserPage, UserType} from '../../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UserPropsType = {
    users: UserPage,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (user: Array<UserType>) => void,
    setTotalPage: (totalPage: number) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
}
const Users = (props: UserPropsType) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;
    let indexOfCurrentPage = pages.indexOf(props.currentPage);
    let pagesOk = pages.slice(props.currentPage >= 7 ? indexOfCurrentPage - 7 : 0, indexOfCurrentPage + 7);
    return (
        <div>
            <div>
                {pagesOk.map(p => {
                    return <span className={props.currentPage === p ? style.activePage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>
                        {p}
                    </span>
                })}
            </div>

            {props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                           <NavLink to={`profile/${u.id}`}>
                                <img className={style.photo} src={u.photos.small}/>
                           </NavLink>
                        </div>
                        <div>
                        {
                            u.followed
                                ? <button onClick={
                                    () => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
                                        }).then(
                                            res => {
                                                if (res.data.resultCode == 0) {
                                                    props.unFollow(u.id)
                                                }
                                            }
                                        );
                                    }
                                }>
                                    UnFollow
                                </button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '7710dd5f-ea56-47ff-b059-6e7cb78ca047'}
                                    }).then(
                                        res => {
                                            if (res.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        }
                                    );
                                }}>Follow</button>
                        }
                    </div>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    </span>
            </div>)
            }
        </div>
    );
};

export default Users;