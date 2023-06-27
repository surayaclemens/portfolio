import './TopNav.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';


class TopNav extends Component {

    render() {

        return (

            <main className='top-nav'>
                <div className='top-nav__row'>
                    {/* <NavLink to='/'><p className='top-nav__text'>Home</p></NavLink>
                    <NavLink to='/mywork'><p className='top-nav__text'>My Work</p></NavLink>
                    <NavLink to='/contact'><p className='top-nav__text'>Contact</p></NavLink> */}
                    {/* <p className='top-nav__text'><NavLink to='/'>Home</NavLink></p>
                    <p className='top-nav__text'><NavLink to='/mywork'>My Work</NavLink></p>
                    <p className='top-nav__text'><NavLink to='/contact'>Contact</NavLink></p> */}
                    <NavLink to='/' className='top-link'>Home</NavLink>
                    <NavLink to='/mywork' className='top-link'>My Work</NavLink>
                    <NavLink to='/contact' className='top-link'>Contact</NavLink>
                </div>
            </main>

        );
    }
}


export default TopNav;