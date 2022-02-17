
import React from 'react';
import classes from './Form.module.css';

export default function Form() {
    return (
        <form className={classes.form}>
            <input 
                className={classes.textbox} 
                type='text' 
                placeholder='Type your name' 
            />
            <textarea 
                className={classes.textarea}
                placeholder='Type you message'
            ></textarea>
            <button className={classes.button}> 
            <span className="iconify" data-icon="fa:paper-plane"></span> 
                send
            </button>
        </form>
    );
}