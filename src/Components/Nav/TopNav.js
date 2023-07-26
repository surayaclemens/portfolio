import './TopNav.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';


function TopNav ({isDarkMode}){
    return (
        <main className='top-nav'>
            <div className='top-nav__row'>
                <NavLink to='/' exact activeClassName='top-link top-link--active' className={!isDarkMode ? 'top-link' : 'top-link top-link--dark'}>Home</NavLink>
                <NavLink to='/mywork' activeClassName='top-link top-link--active' className={!isDarkMode ? 'top-link' : 'top-link top-link--dark'}>My Work</NavLink>
                <NavLink to='/contact' activeClassName='top-link top-link--active' className={!isDarkMode ? 'top-link' : 'top-link top-link--dark'}>Contact</NavLink>
            </div>
        </main>
    );
}

export default TopNav;