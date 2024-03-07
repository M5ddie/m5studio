import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ukzjjro', 'template_7uvidc6', form.current, {
                publicKey: 'VcIAqcxCb5BlhsJKw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="userName" />
            <label>Email</label>
            <input type="email" name="userEmail" />
            <label>Message</label>
            <textarea name="userMessage" />
            <input type="submit" value="Send" />
        </form>
    );
}
// Load the EmailJS library from the CDN
(function() {
    const ejs = document.createElement('script');
    ejs.type = 'text/javascript';
    ejs.src = 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js';
    ejs.async = true;
    document.body.appendChild(ejs);
  })();

export default EmailMe