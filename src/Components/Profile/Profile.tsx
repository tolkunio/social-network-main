import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return (
            <div className={s.content}>
                <div>
                    <img src='https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 '/>
                </div>
                <div>
                    ava+ desc
                </div>
              <MyPosts/>
            </div>
    );
};

export default Profile;