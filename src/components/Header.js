
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header(props) {

    const [menuOpen, setMenuOpen] = React.useState(false);

    function toggleMenu() {
        const list = document.querySelector(`.${classes.inlineList}`);
        const hamburger = document.querySelector(`#hamburger`);
        setMenuOpen(!menuOpen);
        hamburger.classList.toggle('is-active');
        list.classList.toggle(`${classes.active}`);
        hamburger.classList.toggle(`${classes.isActive}`);
    }
    
    return (
        <header className={classes.header}>
            <h3 className={classes.h3}>&lt; jerome n tokpa /&gt;</h3>
            <ul className={classes.inlineList}>
                <li>
                    <Link className={classes.link} to="/">home</Link>
                </li>
                <li>
                    <a className={classes.link} href="https://jerome.pythonanywhere.com/" target="blank">blog</a>
                </li>
                <li>
                    <Link className={classes.link} to="/projects">projects</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/about">about</Link>
                </li>
                <li>
                    <Link className={classes.link} to="/contact">contact</Link>
                </li>
            </ul>
            <div id='hamburger' onClick={toggleMenu} className={classes.hamburger}>
                <span id='bar1' className={classes.bar}></span>
                <span id='bar2' className={classes.bar}></span>
                <span id='bar3' className={classes.bar}></span>
            </div>
        </header>
    )
}