import React from 'react';
import logo from "./logo.svg";
import classes from "./Header.module.css";

interface CardProps {
    width?: string
    height?: string
}

const Header: React.FC<CardProps> = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="image"/>
        </header>
    );
};

export default Header;