import React from 'react';
import style from './Users.module.css'
import axios from 'axios';
import {UserPage, UserType} from '../../../redux/usersReducer';

type UsersPropsType = {
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

export class Users extends React.Component<UsersPropsType, {}> {
    constructor(props: UsersPropsType) {
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
        let pages = [];
        let pagesCount =Math.ceil(this.props.totalUserCount/this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
        let indexOfCurrentPage = pages.indexOf(this.props.currentPage);
        let pagesOk = pages.slice(this.props.currentPage >= 7 ? indexOfCurrentPage - 7 : 0, indexOfCurrentPage + 7);
        return <div>
            <div>
                {pagesOk.map(p=>{
                    return <span className={this.props.currentPage ===p ? style.activePage:''}
                            onClick={()=>{this.onPageChanged(p)}}>
                        {p}
                    </span>
                })}
            </div>

            {this.props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.photo} src={u.photos.small}/>
                        </div>
                        <div>
                        {
                            u.followed ?
                                <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>UnFollow</button>
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
    }
}