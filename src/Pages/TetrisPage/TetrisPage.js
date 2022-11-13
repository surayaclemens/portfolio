import './TetrisPage.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from '../../Components/Header/Header';
import React from 'react';
// import TetrisHome from '../../Assets/tetrisHome.png';
// import TetrisGame from '../../Assets/tetrisGame.png';
import TetrisDemo from '../../Assets/AJT-demo-no-audio.mov';

class TetrisPage extends Component {

  render() {

    document.title="ayajuthem tetris"

    return (
    
            <main className='tetris'>

              <Header text=""/>

              <section className='tetris__content'>

                <h2 className='tetris__body'><span className='tetris__body--blue'>this </span>tetris-inspired language game for ʔayʔaǰuθəm learners</h2>

                <video 
                  className='tetris__video' 
                  src={TetrisDemo}
                  autoPlay={true}
                  loop={true}
                />

                <h3 className='tetris__subheader'> built with react, express, node, SQL</h3>

              </section>

            </main>
    );
  }
}

export default TetrisPage;