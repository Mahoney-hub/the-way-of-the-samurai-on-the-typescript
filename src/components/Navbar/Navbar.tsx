import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const setActive = ({isActive}:any) => isActive ? `${classes.active}` : '';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div className={classes.nav__item}>
                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">News</a>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">Music</a>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;