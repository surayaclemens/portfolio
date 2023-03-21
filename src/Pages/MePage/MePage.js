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
                <section className='list'>
                  <h1 className='list__item'>I'm a sucker for sad girl music</h1>
                  <h1 className='list__item'>I've spent the last 6 months living in Tokyo, Japan</h1>
                  <h1 className='list__item'>I love sewing, fashion, and all things textiles</h1>
                  <h1 className='list__item'>I'm a huge language dork and will light up if you ask about it</h1>
                  <h1 className='list__item'>I'm a big proponent of the 15-minute city</h1>
                  <h1 className='list__item'>I'm pretty bad at guitar but love to play it</h1>
                  <h1 className='list__item'>I think spinach salad the worst</h1>
                  <h1 className='list__item'>I love reading historical fiction</h1>
                  <h1 className='list__item'>I'm passionate about social justice and can't stand political apathy</h1>
                  <h1 className='list__item'>I love comedy and trying to make people laugh</h1>
                  <h1 className='list__item'>want to know something else?</h1>
                  <h1 className='list__item'>
                    <p className='list__link' onClick={this.copyToClipboard}>send me a note</p> 
                    :~)
                  </h1>
                </section>

            </main>
    );
  }
}

export default MePage;