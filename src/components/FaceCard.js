import React from 'react';
import classes from './FaceCard.module.css';

export default function FaceCard() {
    return (
        <div className={classes.faceCard}>
            <img className={classes.faceCardImg} src={require('../images/img.jpg')} alt='jerome' />
            <div className={classes.faceCardTextDiv}>
                <h1 className={classes.h1}>JEROME N. TOKPA</h1>
                <p className={classes.p}>a software developer / life-long learner</p>
            </div>
        </div>
    );
}