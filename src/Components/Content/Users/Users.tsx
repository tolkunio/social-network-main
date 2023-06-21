import React from 'react';
import {UsersPropsType} from './UsersContainer';
import style from './Users.module.css'

const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.users.map(u => <div>
                <span>
                    <div>
                        <img className={style.photo} src={u.photoUrl}/>
                    </div>
                    <div>
                        {
                            u.isFollowed ?
                                <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>UnFollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;