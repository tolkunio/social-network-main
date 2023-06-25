import React from 'react';
import style from './Users.module.css';
import {UsersAPIPropsType} from './UsersAPIComponent';

const Users = (props:UsersAPIPropsType) => {
    let pages = [];
    let pagesCount =Math.ceil(props.totalUserCount/props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
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
                            <img className={style.photo} src={u.photos.small}/>
                        </div>
                        <div>
                        {
                            u.followed ?
                                <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>UnFollow</button>
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