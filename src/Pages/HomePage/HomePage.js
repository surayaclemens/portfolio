import './HomePage.scss';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import { Component } from 'react';
import Modal from '../../Components/Modal/Modal';

class HomePage extends Component {

// set initial state
  state = {
    stackModalBoolean: false,
  }


  // show stack modal
  displayStackModal = () => {
    this.setState({
      stackModalBoolean: true
    })
  }

  // hide stack modal
  hideStackModal = () => {
    this.setState({
      stackModalBoolean: false
    })
  }



  render() {

    document.title="Suraya Clemens - Web Developer"

    return (
      <div className="home">
            <div className='home__header-box'>
                <h1 className='home__header'> hello world </h1>
            </div>

            <main className='home__main-content'>
                {/* INTRO SECTION */}
                <section className='home__section'>
                    <h3 className='home__subheader'>nice to meet you</h3>
                    <h2 className='home__body'>I'm Suraya 👋🏽 </h2>
                    <h2 className='home__body'>a <span className="home__body--pink">full-stack web developer </span>based on the west coast of Canada, on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ nations</h2>
                    <h2 className='home__body'>I see software development as a tool to combine my love of <span className="home__body--blue animation-blink">creating cool things </span>with my responsibility to work towards a <span className="home__body--green">more equitable future </span></h2>
                    <h2 className='home__body'>and I'm going to help you build a product that's both <span className="home__body--yellow home__body--bold">impressive </span>and <span className="home__body--yellow home__body--italic">impactful</span></h2>
                    <NavLink to='/moreaboutme'>
                      <h3 className='home__subheader--more'> ✨ get to know me better!</h3>
                    </NavLink>
                </section>

                {/* THINGS I BUILT */}
                <section className='home__section'>

                    <h3 className='home__subheader'>things I've built</h3>
                    
                    <h2 className='home__body'><NavLink to='/website'><span className='home__body--pink home__body--grow'>this </span> </NavLink>website you're looking at (ty!)</h2>

                    <h2 className='home__body'><NavLink to='/ayajuthemtetris'><span className='home__body--blue home__body--grow'>this </span> </NavLink>tetris-inspired language game for ʔayʔaǰuθəm learners</h2>

                    <h2 className='home__body'><NavLink to='/'><span className='home__body--green home__body--grow'>this </span></NavLink>coffee shop marketing site</h2>

                    <h2 className='home__body'><NavLink to='/'><span className='home__body--yellow home__body--grow'>this </span></NavLink>inventory management app</h2>   

                </section>

                {/* TECH DETAILS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>how I work</h3>
                    <h2 className='home__body'>I typically design in<span className="home__body--pink"> Figma </span>and build in<span className="home__body--blue"> React || Angular </span></h2>
                    <h2 className='home__body home__body--bold'>spin up the back end with<span className="home__body--green"> Node.js || Firebase </span></h2>
                    <h2 className='home__body'>and manage data with<span className="home__body--yellow"> SQL</span></h2>
                    <h2 className='home__body home__body--bold'>but I bet I can learn your framework too :~) </h2>
                    <h2 className='home__body home__body--bold'>
                      <span className='home__body--pink home__body--grow'>this </span>
                      is a list of more things I know
                    </h2>     
                </section>

                {/* LINKS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>obligatory link section</h3>
                      <h2 className='home__body home__body--link'>here's my
                        <a href='/'>
                          <span className="home__body--pink"> email </span>
                        </a>
                      </h2>

                      <h2 className='home__body home__body--link'>you bet I'm on 
                        <a href='https://www.linkedin.com/in/suraya-clemens/'>
                          <span className="home__body--blue"> linkedIn </span>
                        </a>
                      </h2>

                      <h2 className='home__body home__body--link'>lurk my commits on 
                        <a href='https://github.com/surayaclemens'>
                          <span className="home__body--green"> gitHub </span>
                        </a>
                      </h2>

                      <h2 className='home__body home__body--link'>
                        <a href='https://www.whose.land/en/'>
                          <span className="home__body--yellow"> whose land </span> 
                        </a>
                          are you on?
                      </h2>

                      <p className='home__body--small'>^ this isn't mine, I just think you should look at it</p>
                </section>

                {/* <Modal stackModalBoolean={this.stackModalBoolean} hideStackModal={this.hideStackModal()}/> */}

            </main>
      </div>
    );
  }
}

export default HomePage;