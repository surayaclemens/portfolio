import './CoffeeShopPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
import CoffeeShopDemo from '../../Assets/coffeeshop-demo.mov';

class CoffeeShopPage extends Component {

  render() {

    document.title="coffee shop"

    return (
    
            <main className='coffee-shop'>

              <Header text=""/>

              <section className='coffee-shop__content'>

                <h2 className='coffee-shop__body'><span className='coffee-shop__body--blue'>this </span>coffee shop marketing site</h2>

                <video 
                  className='coffee-shop__video' 
                  src={CoffeeShopDemo}
                  autoPlay={true}
                  loop={true}
                />

                <h3 className='coffee-shop__subheader'> built with vanilla HTML & CSS</h3>

              </section>

            </main>
    );
  }
}

export default CoffeeShopPage;