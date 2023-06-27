import './Footer.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Footer ({text}){

    return (

        <main className='footer'>
            <div className='footer__row'>
                <p className='footer__text'><NavLink to='/'>Home</NavLink></p>
                <p className='footer__text'><NavLink to='/'>My Work</NavLink></p>
                <p className='footer__text'><NavLink to='/'>Contact</NavLink></p>
            </div>
            <p className='footer__text footer__text--mini'>© Suraya Clemens 2023</p>
        </main>

    );
}


export default Footer;