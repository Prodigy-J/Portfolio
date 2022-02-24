
import classes from './Form.module.css';
import { send } from 'emailjs-com';
import { useState } from 'react';

export default function Form() {

    const successStyle = {
        backgroundColor: 'rgba(164, 219, 236, 0.8)',
        color: 'rgba(18, 98, 122)',
        boxShadow: '0 1px 2px #555',
        display: 'block',
    };

    const failureStyle = {
        backgroundColor: 'rgba(236, 164, 164, 0.8)',
        color: 'rgb(158, 23, 23)',
        boxShadow: '0 1px 2px #555',
        display: 'block',
    };

    const [sentSuccessful, setSentSucessful] = useState(false);
    
    const [show, setShow] = useState(false);

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const onSubmit = e => {
        e.preventDefault();
        send(
            'service_2gwn8bh',
            'template_ry8lief',
            toSend,
            'user_xfgsmwJQfhLRQFzI1wd9r'
        )
        .then((response) => {
            setSentSucessful(true);
            setShow(true);
            setToSend({
                from_name: '',
                from_email: '',
                message: '',
            });
        })
        .catch(err => {
            setSentSucessful(false);
            setShow(true);
        });
    };

    const handleChange = e => {
        setToSend({
            ...toSend,
            [e.target.name]: e.target.value
        });
    };

    function close() {
        setShow(false);
    }

    return (
        <>{ show &&
        <div id='notification' className={classes.notificationDiv} style = {sentSuccessful ? successStyle : failureStyle}>{sentSuccessful? "Your message was sent" : "Message failed to sent"}<span className={classes.closeButton} onClick={close}>x</span></div> }
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.flexContainer}>
                <input 
                    className={classes.textbox} 
                    type='text'
                    name="from_name"
                    placeholder='Type your name' 
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input 
                    className={classes.textbox} 
                    type='email'
                    name="from_email"
                    placeholder='Type your email' 
                    value={toSend.from_email}
                    onChange={handleChange}
                />
            </div>
            <textarea 
                className={classes.textarea}
                placeholder='Type you message'
                name='message'
                value={toSend.message}
                onChange={handleChange}
            ></textarea>
            <button className={classes.button} onClick={onSubmit}> 
            <span className="iconify" data-icon="fa:paper-plane"></span> 
                send
            </button>
        </form>
        </>
    );
}