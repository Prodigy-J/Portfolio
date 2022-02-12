
import React from 'react';
import classes from './Header.module.css';

export default function Header(props) {

    const [menuOpen, setMenuOpen] = React.useState(false);

    function toggleMenu() {
        const list = document.querySelector(`.${classes.inlineList}`);
        const hamburger = document.querySelector(`#hamburger`);
        setMenuOpen(!menuOpen);
        hamburger.classList.toggle('is-active');
        list.classList.toggle(`${classes.active}`);
        hamburger.classList.toggle(`${classes.isActive}`)
        console.log(list)
    }
    
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
            <div id='hamburger' onClick={toggleMenu} className={classes.hamburger}>
                <span id='bar1' className={classes.bar}></span>
                <span id='bar2' className={classes.bar}></span>
                <span id='bar3' className={classes.bar}></span>
            </div>
        </header>
    )
}