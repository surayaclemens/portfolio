import './HomePage.scss';
import { NavLink} from 'react-router-dom';
import { useState} from 'react';
import Modal from '../../Components/Modal/Modal';
import resume from '../../Assets/suraya-clemens-resume.pdf';


function HomePage (isDarkMode) {

  // set initial state
  const [modal, setModalState] = useState(false);

  // show stack modal
  const showModal = () => {
    setModalState(true);
    console.log('should show modal', modal)
  };

  // hide stack modal
  const hideModal = () => {
    setModalState(false);
    console.log('should hide modal', modal)
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('surayaclemens@gmail.com')
    setTimeout(() => {
      (alert('📧 📬 💌 Email copied to clipboard! 📧 📬 💌'))
    }, 100);
  }


  document.title="Suraya Clemens - Web Developer"
    return (
      <div className='home'>
            <header className='home__header-box'>
              <h1 className='home__header'> hello world </h1>
            </header>

            <main className='home__main-content'>
                {/* INTRO SECTION */}
                <section className='home__section'>
                    <h3 className='home__subheader'>nice to meet you</h3>
                    <h2 className='home__body'>I'm Suraya 👋🏽 </h2>
                    <h2 className='home__body'>A <span className="home__body--indigo">full-stack web developer </span>based on the west coast of Canada, on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ Nations.</h2>
                    <h2 className='home__body'>I see software development as a tool to combine my love of <span className="home__body--blue animation-blink">creating cool things </span>with my responsibility to work towards a <span className="home__body--red">more equitable future. </span></h2>
                    <h2 className='home__body'>And I'm going to help you build an app that's both <span className="home__body--orange home__body--bold">impressive </span>and <span className="home__body--orange home__body--italic">impactful.</span></h2>
                    {/* <NavLink to='/moreaboutme'>
                      <h3 className='home__body home__body--link'>Get to know me here</h3>
                    </NavLink> */}
                </section>

                {/* THINGS I BUILT */}
                <section className='home__section'>

                    <h3 className='home__subheader'> some things I've built</h3>
                    
                    <h2 className='home__body'>This website you're looking at!</h2>

                    <h2 className='home__body'><NavLink to='/ayajuthemtetris'><span className='home__body--indigo home__body--grow'>This </span> </NavLink>tetris-inspired language game for ʔayʔaǰuθəm learners</h2>

                    <h2 className='home__body'><NavLink to='/coffeeshop'><span className='home__body--blue home__body--grow'>This </span></NavLink>coffee shop marketing site</h2>

                    <h2 className='home__body'><NavLink to='/alatulie'><span className='home__body--red home__body--grow'>This </span></NavLink>nerdy english to elvish translator</h2>  

                    <h2 className='home__body'><NavLink to='/cedulify'><span className='home__body--orange home__body--grow'>This </span> </NavLink>wellness company's user portal</h2> 

                </section>

                {/* TECH DETAILS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>brass tacks</h3>
                    <h2 className='home__body'>I typically design in<span className="home__body--indigo"> Figma </span></h2>
                    <h2 className='home__body'>Build in<span className="home__body--blue"> React || Angular || Next.js </span></h2>
                    <h2 className='home__body home__body--bold'>Spin up the back end with<span className="home__body--red"> Node.js </span></h2>
                    <h2 className='home__body'>And manage data with<span className="home__body--orange"> Firebase || SQL</span></h2>
                    <h2 className='home__body home__body--bold'>But I bet I can learn your framework too :~) </h2>
                    <h2 className='home__body home__body--bold'>
                      <span className='home__body--indigo home__body--grow' onClick={showModal}>This </span>
                      is a list of more things I know.
                    </h2>  
                <Modal modal={modal} hideStackModal={hideModal} isDarkMode={isDarkMode}/>

                </section>

                {/* LINKS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>links links links</h3>
                      <h2 className='home__body'>
                        Here's my
                        <span className="home__body--blue home__body--link" onClick={copyToClipboard}> email </span>
                        and
                        <a href={resume} target = "_blank">
                          <span className="home__body--blue home__body--link"> resume</span></a>
                      </h2>

                      <h2 className='home__body'>You can find me on 
                        <a href='https://www.linkedin.com/in/suraya-clemens/' target="_blank">
                          <span className="home__body--red home__body--link"> LinkedIn </span>
                        </a>
                      </h2>

                      <h2 className='home__body'>And browse my commits on 
                        <a href='https://github.com/surayaclemens' target="_blank">
                          <span className="home__body--orange home__body--link"> GitHub </span>
                        </a>
                      </h2>

                      <h2 className='home__body'>TTYL!</h2>
                </section>


            </main>
      </div>
    );
  }

export default HomePage;