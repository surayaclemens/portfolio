import './Footer.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Footer ({isDarkMode}){

    return (

        <main className='footer'>
            <div className='footer__row'>
                <NavLink to='/' exact className={!isDarkMode ? 'footer__text' : 'footer__text footer__text--dark'}>Home</NavLink>
                <NavLink to='/mywork'  className={!isDarkMode ? 'footer__text' : 'footer__text footer__text--dark'}>My Work</NavLink>
                <NavLink to='/contact'  className={!isDarkMode ? 'footer__text' : 'footer__text footer__text--dark'}>Contact</NavLink>
            </div>
            <p className={!isDarkMode ? 'footer__text footer__text--mini' : 'footer__text footer__text--mini footer__text--dark'}>© Suraya Clemens 2025</p>
        </main>

    );
}


export default Footer;