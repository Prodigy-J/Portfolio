
import React from 'react';
import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <p className={classes.p}>COPYRIGHT &copy; 2022. JEROME N. TOKPA. ALL RIGHTS RESERVED.</p>
            <ul className={classes.inlineList}>
                <li className={classes.fbsocialLink}>
                    <a className={classes.whiteLink} href='https://www.facebook.com/jerome-tokpa'>
                        <span className="iconify" data-icon="dashicons:facebook"></span>
                    </a>
                </li>
                <li className={classes.twsocialLink}>
                    <a className={classes.whiteLink} href='https://www.twitter.com/@knasumo'>
                        <span className="iconify" data-icon="fa-brands:twitter-square"></span>
                    </a>
                </li>
                <li className={classes.lisocialLink}>
                    <a className={classes.whiteLink} href='https://www.linkedin.com/in/jerome-tokpa-aa6274172'>
                        <span className="iconify" data-icon="akar-icons:linkedin-fill"></span>
                    </a>
                </li>
                <li className={classes.igsocialLink}>
                    <a className={classes.whiteLink} href='https://www.instagram.com/ace_since_birth'>
                        <span className="iconify" data-icon="akar-icons:instagram-fill"></span>
                    </a>
                </li>
                <li className={classes.ytsocialLink}>
                    <a className={classes.whiteLink} href='https://www.youtube.com/channel/UCnnLx8RcI3gWHCKWwfcBt3A'>
                        <span className="iconify" data-icon="fa-brands:youtube-square"></span>
                    </a>
                </li>
            </ul>            
        </footer>
    )
}