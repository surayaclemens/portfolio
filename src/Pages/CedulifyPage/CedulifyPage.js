import './CedulifyPage.scss';
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
                <h2 className='cedulify__body'>
                  <span>
                    <a className='cedulify__body--red' href='https://www.cedulify.com/' target="_blank">This </a>
                    </span> 
                  wellness company's user portal
                </h2>
                <h3 className='cedulify__subheader'><a className='cedulify__body--red' href='https://www.cedulify.com/mobile-app' target="_blank">more features </a>coming to web soon! 👀</h3>
                <div className='cedulify__videos'>
                  <video 
                    className='cedulify__video' 
                    src={LoginDemo}
                    autoPlay={true}
                    loop={false}
                  />
                  <video 
                    className='cedulify__video' 
                    src={ProfileDemo}
                    autoPlay={true}
                    loop={false}
                  />
                </div>
                <h3 className='cedulify__subheader'>Work in progress with TypeScript, Angular, SCSS, Node.js, Firebase</h3>
              </section>
            </main>
    );
  }
}

export default CedulifyPage;