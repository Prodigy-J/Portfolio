import React from "react";
import classes from "./InfoCard.module.css";

export default function InfoCard() {
    return (
        <div className={classes.infoCard}>
            <img className={classes.avatar} src={require('../images/UMFR4056.JPG')} alt="my-avatar" />
            <h2 className={classes.h2}>JEROME N. TOKPA</h2>
            <p className={classes.p}>
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            <br /><br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
            <br /><br />
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
            </p>
            <button className={classes.downloadBtn}>
                <span class="iconify" data-icon="fa:download"></span> download cv
            </button>
        </div>
    );
}