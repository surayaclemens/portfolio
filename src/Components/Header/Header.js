import './Header.scss';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import BackArrow from '../../Assets/back_arrow.svg';
import React from 'react';

function Header ({text}){

    return (

        <main className='header'>
            <NavLink to='/'><img className='header__back' src={BackArrow}/></NavLink>
            <h3 className='header__text'>{text}</h3>
        </main>

    );
}


export default Header;