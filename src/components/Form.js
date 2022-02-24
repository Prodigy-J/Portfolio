
import classes from './Form.module.css';
import { send } from 'emailjs-com';
import { useState } from 'react';

export default function Form() {
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
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch(err => {
            console.log('FAILED...', err);
        });
        setToSend({
            from_name: '',
            from_email: '',
            message: '',
        });
    };

    const handleChange = e => {
        setToSend({
            ...toSend,
            [e.target.name]: e.target.value
        });
    };

    return (
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
    );
}