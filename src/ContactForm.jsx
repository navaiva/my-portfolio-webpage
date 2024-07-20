import React, { useState } from 'react';
import axios from 'axios';
import './contactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/send-email', formData)
            .then(response => {
                alert('Email sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch(error => {
                alert('Error sending email');
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div classname='formStyle'>
            <div className='names'>
            <label className='labels'>Name
                <input className='inputs' type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            </div>
            <div className='emails'>
            <label className='labels'>
                Email
                <input className='inputs' type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            </div>
            <div className='messages'>
            <label className='labels'>
                Message
                <textarea className='inputs messagesSpace' name="message" value={formData.message} onChange={handleChange} required></textarea>
            </label>
            </div>
            <div className='buttonPosition'>
            <a className="button" href="#ee" color={ '#00CCFF'} >
    Send Message
  </a>
            </div>
            </div>
        </form>
    );
};

export default ContactForm;