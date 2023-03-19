import './CedulifyPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
// import TetrisDemo from '../../Assets/AJT-demo-no-audio.mov';

class CedulifyPage extends Component {

  render() {

    document.title="cedulify"

    return (
    
            <main className='page'>

              <Header text=""/>

              <section className='page__content'>

                <h2 className='page__body'><span className='page__body--blue'>this </span>mindful calendar app</h2>

                <video 
                  className='page__video' 
                //   src={}
                  autoPlay={true}
                  loop={true}
                />

                <h3 className='page__subheader'>built with typescript, angular, scss, node, express, firebase</h3>
                <h3 className='page__subheader'>march 2023</h3>


              </section>

            </main>
    );
  }
}

export default CedulifyPage;