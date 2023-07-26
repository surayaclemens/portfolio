import './CoffeeShopPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';

class CoffeeShopPage extends Component {

  render() {

    document.title="coffee shop"

    return (
    
            <main className='coffee-shop'>

              <Header text=""/>

              <section className='coffee-shop__content'>

                <h2 className='coffee-shop__body'><span className='coffee-shop__body--blue'>This </span>coffee shop marketing site</h2>

             

                <h3 className='coffee-shop__subheader'> Built with vanilla HTML & CSS</h3>
                <h3 className='page__subheader'>April 2022</h3>


              </section>

            </main>
    );
  }
}

export default CoffeeShopPage;