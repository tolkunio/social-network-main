import React from 'react';
import style from './Users.module.css';
import {UserPage} from '../../../redux/usersReducer';
import {NavLink} from 'react-router-dom';

type UserPropsType = {
    users: UserPage,
    follow: (userId:string) => void;
    unFollow: (userId:string) => void;
    onPageChanged: (pageNumber: number) => void,
}
const Users = (props: UserPropsType) => {
    let pages = [];
    for (let i = 1; i <= props.users.totalUserCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.users.currentPage === p ? style.activePage : ''}
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
                            ? <button
                                disabled={props.users.followedToggleUsersId.some(id=>id!==u.id)}
                                onClick={()=>{props.unFollow(u.id)}}>
                                UnFollow
                            </button>
                            : <button
                                disabled={props.users.followedToggleUsersId.some(id=>id!==u.id)}
                                    onClick={() => {props.follow(u.id)}}>
                                Follow
                            </button>
                    }
                </div>
            </div>)
            }
        </div>
    );
};

export default Users;