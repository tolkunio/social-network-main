// import React, {useEffect} from 'react';
// import {UsersPropsType} from './UsersContainer';
// import style from './Users.module.css'
// import axios from 'axios';
//
// const Users = (props: UsersPropsType) => {
//     if(props.users.users.length==0){
//         axios.get('https://social-network.samuraijs.com/api/1.0/users',
//             {withCredentials:true})
//             .then((res)=>{
//                 props.setUser(res.data.items);
//             })
//     }
//     return (
//
//         <div>
//             {props.users.users.map(u => <div>
//                 <span>
//                     <div>
//                         <img className={style.photo} src={u.photos.small}/>
//                     </div>
//                     <div>
//                         {
//                             u.followed ?
//                                 <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
//                                 : <button onClick={() => props.follow(u.id)}>UnFollow</button>
//                         }
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                 </span>
//             </div>)}
//         </div>
//     );
// };
//
export default {}