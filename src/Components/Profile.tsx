import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img alt="beach" src=""/>
                </div>
                <div>
                    ava+ desc
                </div>
                <div className="posts">
                    My posts
                    <div className={s.item}>
                        New post
                    </div>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;