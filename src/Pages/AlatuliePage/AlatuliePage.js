import './AlatuliePage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
import alatulieDemo from '../../Assets/alatulie-demo.mov';

class AlatuliePage extends Component {

  render() {

    document.title="alatúlie"

    return (
    
            <main className='page'>

              <Header text=""/>

              <section className='page__content'>

                <h2 className='page__body'><span className='page__body--blue'>this </span>translation app that fetches the Elvish language output of English input</h2>
                <h3 className='page__subheader'>(an elaboration of a 24-hour hackathon project)</h3>

                <video 
                  className='page__video' 
                  src={alatulieDemo}
                  autoPlay={true}
                  loop={true}
                />

                <h3 className='page__subheader'>built with javascript, react, scss, node, express, axios</h3>
                <h3 className='page__subheader'>november 2022</h3>


              </section>

            </main>
    );
  }
}

export default AlatuliePage;