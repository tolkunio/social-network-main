import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (<nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <a href="src/Components#">Profile</a>
                </div>
                <div className={s.item}>
                    <a href="src/Components#">Messages</a>
                </div>
                <div className={s.item}>
                    <a href="src/Components#">News</a>
                </div>
                <div className={s.item}>
                    <a href="src/Components#">Music</a>
                </div>
                <div className={s.item}>
                    <a href="src/Components#">Settings</a>
                </div>
            </nav>
    );
};

export default Navbar;