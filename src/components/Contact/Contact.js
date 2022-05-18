// import logo from './logo.svg';
import React from 'react'
import './Contact.css';
import CurrentHeads from './current'
import Header from './header'
import Button from './buttons'

function Contact() {
  return (
    <div className='app'>
      <Header />
      <CurrentHeads />
      <Button />
    </div>
  );
}

export default Contact;
