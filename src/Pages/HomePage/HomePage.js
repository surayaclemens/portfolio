import './HomePage.scss';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import { Component } from 'react';

class HomePage extends Component {

  render() {

    document.title="suraya clemens - web development"

    return (
      <div className="home">
            <div className='home__header-box'>
                <h1 className='home__header'> hello world </h1>
                <h1 className='home__header home__header--hidden'> bonjour la monde </h1>
                <h1 className='home__header home__header--hidden'> hola el mundo </h1>
                <h1 className='home__header home__header--hidden'> こんにちは世界 </h1>
            </div>

            <main className='home__main-content'>
                {/* INTRO SECTION */}
                <section className='home__section'>
                    <h3 className='home__subheader'>nice to meet you</h3>
                    <h2 className='home__body'>I’m Suraya 👋🏽 </h2>
                    <h2 className='home__body'><span className="home__body--pink">a web developer </span>based in Vancouver BC on the unceded land of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations</h2>
                    <h2 className='home__body'>I see software development as a tool to combine my love of <span className="home__body--blue">creating cool things </span>with my responsibility to work towards a <span className="home__body--green">more equitable future </span></h2>
                    <h2 className='home__body'>and I’m going to help you build a product that’s both <span className="home__body--yellow">impressive </span>and <span className="home__body--yellow">impactful</span></h2>
                    <h3 className='home__subheader--right'>get to know me better!</h3>
                </section>

                {/* THINGS I BUILT */}
                <section className='home__section'>
                    <h3 className='home__subheader'>this year I built</h3>
                    <h2 className='home__body home__body--pink'>this website you're looking at 👀 </h2>
                    <h2 className='home__body home__body--bold'><NavLink to='/ayajuthemtetris'><span className='home__body--blue'>this </span> </NavLink>tetris-inspired language game for ʔayʔaǰuθəm learners</h2>
                    <h2 className='home__body home__body--bold'><NavLink to='/'><span className='home__body--green'>this </span></NavLink>landing page for the University of Victoria’s Sociolinguistic Research Lab</h2>
                    <h2 className='home__body home__body--bold'><NavLink to='/'><span className='home__body--yellow'>this</span></NavLink> online dictionary for the WSANEC Nation</h2>     
                </section>

                {/* TECH DETAILS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>brass tacks</h3>
                    <h2 className='home__body'>I typically <span className="home__body--pink">design</span> in Figma and <span className="home__body--blue">build </span>in React</h2>
                    <h2 className='home__body home__body--bold'>run the <span className="home__body--green">backend </span>with Express and Node</h2>
                    <h2 className='home__body'>and manage <span className="home__body--yellow">data </span>with SQL</h2>
                    <h2 className='home__body home__body--bold'>but I bet I can learn your framework too :~) </h2>
                    <h2 className='home__body home__body--bold'><NavLink to='/'><span className='home__body--pink'>this </span></NavLink>is a list of more things I know</h2>     
                </section>

                {/* LINKS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>links links links</h3>
                    <h2 className='home__body'>email</h2>
                    <h2 className='home__body'>linked in</h2>
                    <h2 className='home__body'>git hub</h2>
                </section>

            </main>
      </div>
    );
  }
}

export default HomePage;