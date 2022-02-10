
import React from 'react';
import classes from './Header.module.css';

export default function Header() {
    return (
        <header className={classes.header}>
            <h3 className={classes.h3}>&lt; jerome n tokpa /&gt;</h3>
            <ul className={classes.inlineList}>
                <li>home</li>
                <li>projects</li>
                <li>blog</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className={classes.hamburger}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>
        </header>
    )
}