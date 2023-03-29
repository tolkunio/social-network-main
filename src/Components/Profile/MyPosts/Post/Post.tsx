import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg"
                alt="test"
            />
            New post
            <div>
                <span>like</span>
            </div>

        </div>
    );
};

export default Post;