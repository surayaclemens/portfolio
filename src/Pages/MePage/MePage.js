import './MePage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';

class MePage extends Component {

  copyToClipboard(){
    navigator.clipboard.writeText('surayaclemens@gmail.com')
    setTimeout(() => {
      (alert('📧 📬 💌 Email copied to clipboard! 📧 📬 💌'))
    }, 100);
  }

  render() {

    document.title="get to know me :)"

    return (
    
        <main className='main'>
                <Header/>
                <h1 className='main__item'>I'm currently living in Tokyo, Japan</h1>
                <h1 className='main__item'>I'm a sucker for sad girl music</h1>
                <h1 className='main__item'>I love fashion and all things textiles</h1>
                <h1 className='main__item'>I'm a huge language dork, learning new ones is my favourite hobby</h1>
                <h1 className='main__item'>I'm a big proponent of the 15-minute city</h1>
                <h1 className='main__item'>I'm pretty bad at guitar but love to play it</h1>
                <h1 className='main__item'>I think spinach salad should be illegal</h1>
                <h1 className='main__item'>I love reading historical fiction</h1>
                <h1 className='main__item'>I'm passionate about social justice and can't stand political apathy</h1>
                <h1 className='main__item'>I love comedy and trying to make people laugh</h1>


                <h1 className='main__item'>want to know something else?</h1>


                <h3 className='main__p'>
                  <p className='main__link' onClick={this.copyToClipboard}>send me a note</p> 
                  :~)
                </h3>

            </main>
    );
  }
}

export default MePage;