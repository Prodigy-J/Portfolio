import React from "react";
import classes from "./Project.module.css";

export default function Project(props) {
    return (
        <a href={props.link} className={classes.link} target="blank">
            <div className={classes.projectDiv}>
                <img src={props.image} alt={props.desc} className={classes.imag} />
                <h4 className={classes.h4}>{props.desc}</h4>
            </div>
        </a>
    );
}