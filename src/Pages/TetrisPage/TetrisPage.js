import './TetrisPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
// import TetrisHome from '../../Assets/tetrisHome.png';
// import TetrisGame from '../../Assets/tetrisGame.png';

class TetrisPage extends Component {

  render() {

    document.title="ayajuthem tetris"

    return (
    
            <main className='tetris'>

              <Header text=""/>

              <section className='tetris__content'>

                <h2 className='tetris__body'><span className='tetris__body--blue'>This </span>tetris-inspired language game for ʔayʔaǰuθəm learners</h2>
                <h3 className='tetris__subheader'>Immense gratitude to the K’ómoks First Nation for sharing their language and Dr. Suzanne Urbanczyk for connecting us</h3>
                <h3 className='tetris__subheader'>Version 1 below. Version 2 coming soon!</h3>

                <h3 className='tetris__subheader'>Built with Javascript, React, SCSS, Node.js, SQL</h3>
                <h3 className='tetris__subheader'>This was the final project of my web development diploma, completed within a two-week sprint</h3>
                <h3 className='tetris__subheader'>July 2022</h3>


              </section>

            </main>
    );
  }
}

export default TetrisPage;