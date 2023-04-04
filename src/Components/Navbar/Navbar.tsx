import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (<nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="src/Components#">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="src/Components#">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="src/Components#">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="src/Components#">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="src/Components#">Settings</NavLink>
                </div>
            </nav>
    );
};

export default Navbar;