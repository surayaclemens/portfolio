import './SewingPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';

class SewingPage extends Component {

  render() {

    document.title="Sewing Projects"

    return (
    
            <main className='Sewing'>

              <Header text=""/>

              <section className='sewing__content'>

                <h2 className='sewing__body'><span className='sewing__body--blue'>sewing </span>projects</h2>

                {/* <video 
                  className='wewing__video' 
                  src={SewingDemo}
                  autoPlay={true}
                  loop={true}
                /> */}

                <h3 className='sewing__subheader'>things I've made</h3>

              </section>

            </main>
    );
  }
}

export default SewingPage;