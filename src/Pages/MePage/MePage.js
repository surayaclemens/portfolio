import './MePage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
import saluki from '../../Assets/saluki.png';

class MePage extends Component {

  render() {

    document.title="get to know me :)"

    return (
    
        <main className='main'>
                <Header/>
                <h1 className='main__item'>I love salukis</h1>
                    <img className='main__saluki' src={saluki}/>
                <h1 className='main__item'>I can't stand political apathy</h1>
                <h1 className='main__item'>I'm a sucker for sad girl music</h1>
                <h1 className='main__item'>I'm currently living in Fukuoka, Japan</h1>
                <h1 className='main__item'>I love fashion and all things textiles</h1>
                <h1 className='main__item'>I'm bad at guitar but love to play it</h1>
                <h1 className='main__item'>I'm a big proponent of the 15-minute city</h1>
                <h1 className='main__item'>I'm a language dork at heart</h1>
                <h1 className='main__item'>I think spinach salad should be illegal</h1>
                <h1 className='main__item'>I love historical fiction</h1>
                <h1 className='main__item'>want a longer list?</h1>




                {/* <h1 className='main__item'>...</h1> */}

                <h3 className='main__p'>
                    <a href=''>
                        <span className='main__link'>send me a note</span>
                    </a> :)
                </h3>












              
            </main>
    );
  }
}

export default MePage;