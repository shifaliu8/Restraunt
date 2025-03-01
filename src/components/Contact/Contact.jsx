import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className='c-wrapper'>
        <div className='c-container'>
            <div className='c-title'>
                <h1>Have a Question in Mind?<br/>Let Us Help You</h1> 
            </div>
            <div className='c-form'>
                <input type="email" placeholder="yourmail@gmail.com" />
                <div className='button1'>Submit</div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
