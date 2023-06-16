import React, { useState } from 'react';

export default function contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
      if (event.target.value.trim() !== '') {
        setNameError('');
      }
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      if (event.target.value.trim() !== '') {
        setEmailError('');
      }
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
      if (event.target.value.trim() !== '') {
        setMessageError('');
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (name.trim() === '') {
        setNameError('Name is required');
      }
  
      if (email.trim() === '') {
        setEmailError('Email is required');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Invalid email address');
      }
  
      if (message.trim() === '') {
        setMessageError('Message is required');
      }
  
      if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
        // Submit the form or perform further actions here
        console.log('Form submitted');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className='submit-style'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <span>{nameError}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
          {messageError && <span>{messageError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
