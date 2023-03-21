import './CedulifyPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
import LoginDemo from '../../Assets/login-signup.mov';
import ProfileDemo from '../../Assets/personal-info.mov';


class CedulifyPage extends Component {

  render() {

    document.title="cedulify"

    return (
    
            <main className='cedulify'>

              <Header text=""/>

              <section className='cedulify__content'>

                {/* <h2 className='cedulify__body'><span className='cedulify__body--blue'>this </span>mindful calendar app</h2> */}
                <h2 className='cedulify__body'>
                  <span>
                    <a className='cedulify__body--pink' href='https://www.cedulify.com/' target="_blank">Cedulify </a>
                    </span> 
                  hasn't been released yet 🤫
                </h2>
                <h2 className='cedulify__body'>stay tuned for screencaps and a live link!</h2>

                {/* <video 
                  className='cedulify__video' 
                  src={LoginDemo}
                  autoPlay={true}
                  loop={true}
                /> */}

                 {/* <video 
                  className='cedulify__video' 
                  src={ProfileDemo}
                  autoPlay={true}
                  loop={true}
                /> */}
                <h3 className='cedulify__subheader'>currently in progress with typescript, angular, scss, node, express, firebase</h3>

              </section>

            </main>
    );
  }
}

export default CedulifyPage;