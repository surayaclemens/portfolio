import './ContactPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';

class ContactPage extends Component {

  render() {

    document.title="Contact"

    return (
    
            <main className='main'>

              CONTACT PAGE

            </main>
    );
  }
}

export default ContactPage;