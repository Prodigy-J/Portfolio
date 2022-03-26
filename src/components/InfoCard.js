import React from "react";
import classes from "./InfoCard.module.css";

export default function InfoCard() {
    return (
        <div className={classes.infoCard}>
            <img className={classes.avatar} src={require('../images/UMFR4056.JPG')} alt="my-avatar" />
            <h2 className={classes.h2}>JEROME N. TOKPA</h2>
            <p className={classes.p}>
            Hello there 👋🏾, I am Jerome. I love building software and delivering the best apps. 💻
            <br /><br />
            I'm currently going deep into ReactJS ⚛ technology and as a matter of fact, this site was built with React. If you were looking for me in a very large crowd, finding me will be easy. Just look for the guy who stares at his computer for hours without blinking 😂.
            <br /><br />
            Jokes aside, I'm available for hire. If you want to build, modify or manage your website, I'm here to give a hand. Expect from me a responsive mobile-first website that's easy to navigate by your visitors. 🤼
            <br /><br />
            Thank you for visiting my site. Hope you have a great day. 🙏🏾
            </p>
        </div>
    );
}