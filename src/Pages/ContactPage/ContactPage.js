import './ContactPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
import TopNav from '../../Components/Nav/TopNav';

class ContactPage extends Component {

  render() {

    document.title="Contact"

    return (
    
      <main className='main'>
        {/* <TopNav /> */}
        <div className='main__content'>
          <h3 className='main__subheader'>Get in touch</h3>
          <p className='main__text'>Drop me a line with some info about yourself and your project, and let’s get chatting! I’ll get back to you asap.</p>
          <p className='main__link main__link--blue'>surayaclemens@gmail.com</p>
          <p className='main__link main__link--red'>linkedin/surayaclemens</p>
          <p className='main__link main__link--orange'>github/surayaclemens</p>
          <p className='main__text'>Let's make something great together :~)</p>

        </div>
          

      </main>
    );
  }
}

export default ContactPage;