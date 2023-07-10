import './HomePage.scss';
import { NavLink} from 'react-router-dom';
import { useState} from 'react';
import helloWorld from '../../Assets/hello_world_logo.svg';
import languageBall from '../../Assets/language_ball.svg';
import educationBall from '../../Assets/education_ball.svg';
import communityBall from '../../Assets/community_ball.svg';
import creativityBall from '../../Assets/creativity_ball.svg';
import techBall from '../../Assets/tech_ball.svg';
import Modal from '../../Components/Modal/Modal';
import resume from '../../Assets/suraya-clemens-resume.pdf';
import MobileNav from '../../Components/Nav/MobileNav';
import TopNav from '../../Components/Nav/TopNav';



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


  document.title="Suraya Clemens | Web Developer"
    return (
      <div className='home'>
        {/* <TopNav /> */}
            <div className='home__header-box'>
              <img className='home__hero' src={helloWorld}/>
            </div>

            <main className='home__main-content'>
                {/* INTRO SECTION */}
                <section className='home__section'>
                    <h3 className='home__subheader'>nice to meet you</h3>
                    <p className='home__body'>I'm Suraya 👋🏽 </p>
                    <p className='home__body'>A <span className="home__body--indigo">full-stack web developer </span>based on the west coast of Canada, on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ Nations.</p>
                    <p className='home__body'>I see software development as a tool to combine my love of <span className="home__body--blue animation-blink">creating cool things </span>with my responsibility to work towards a <span className="home__body--red">more equitable future. </span></p>
                    <p className='home__body'>And I'm going to help you build an app that's both <span className="home__body--orange home__body--italic">impressive </span>and <span className="home__body--orange home__body--bold">impactful.</span></p>
                    {/* <NavLink to='/moreaboutme'>
                      <h3 className='home__body home__body--link'>Get to know me here</h3>
                    </NavLink> */}
                </section>

                {/* BACKGROUND */}
                <section className='home__section'>
                    <h3 className='home__subheader'>Long story short</h3>
                    <p className='home__body'>Although always a fan of gadgets and tech, it wasn’t until I realized I could combine that fascination with other core passions that I considered a career in software development.</p>
                    <div className='value-row'>
                      <img src={creativityBall} className='value-row__ball'/>
                      <img src={educationBall} className='value-row__ball'/>
                      <img src={techBall} className='value-row__ball'/>
                      <img src={languageBall} className='value-row__ball'/>
                      <img src={communityBall} className='value-row__ball'/>
                    </div>
                    <p className='home__body'>I loved playing around with computers and code, but was anxious that a career in tech would feel void of meaning. Then I learned about some local research using cutting-edge technology to aid Indigenous Language Revitalization and it alllll came together. I could see an exciting future rich in growth and purpose. I could go after everything I wanted - using technical skills for social good.</p>
                    <p className='home__body'>Developing apps and websites (like this one!) is a challenging, fulfilling, and endlessly fun way for me to build a little more beauty into the world. Whether designing a beautiful interface, creating a seamless user experience, coding some tough new functionality, or pursuing an exasperating bug, this work lights my brain up and I love that I get to make an impact for a living.</p>
                </section>

                {/* EDUCATION */}
                <section className='home__section'>
                    <h3 className='home__subheader'>Education</h3>
                    <div className='text-row'>
                      <div className='text-row__bullet'></div>
                      <p className='home__body home__body--list'>Bachelor of Arts, Linguistics</p>
                    </div>
                    <p className='home__body home__body--small'>University of Victoria | Victoria, BC</p>
                    <div className='text-row'>
                      <div className='text-row__bullet'></div>
                      <p className='home__body home__body--list'>Diploma, Web Development</p>
                    </div>
                    <p className='home__body home__body--small'>Brainstation | Vancouver, BC</p>
                </section>

                {/* SKILLS */}
                <section className='home__section'>
                    <h3 className='home__subheader'>SKILLS</h3>
                      <p className='home__body home__body'>Angular, React, JavaScript, TypeScript, HTML, CSS/SCSS, Node.js, Firebase, Figma, Jira, copywriting, copyediting, public speaking, Next.js, SQL, Flutter, Dart, UX research, prototyping</p>
                </section>
                

                {/* TLDR */}
                <section className='home__section'>
                    <h3 className='home__subheader'>TL;DR</h3>
                    <p className='home__body'>
                    I excel at front-end development, relish opportunities to learn new skills, and thrive in environments that are values-driven. My colleagues know me as an initiative-taker, problem solver, excellent communicator, and big fan of jokes in the workplace. My friends know me as a language dork, lover of textiles, and gal who really likes to swim. Let's make something great together :~)</p>
                </section>
                <section className='home__section'>
                  <NavLink className='home-button'to='/mywork'>
                    <button className='home-button__button'>Check out my work</button>
                  </NavLink>
                </section>

                {/* THINGS I BUILT */}
                {/* <section className='home__section'>
                    <h3 className='home__subheader'> some things I've built</h3>
                    <p className='home__body'>This website you're looking at!</p>
                    <p className='home__body'><NavLink to='/ayajuthemtetris'><span className='home__body--indigo'>This </span> </NavLink>tetris-inspired language game for ʔayʔaǰuθəm learners</p>
                    <p className='home__body'><NavLink to='/coffeeshop'><span className='home__body--blue'>This </span></NavLink>coffee shop marketing site</p>
                    <p className='home__body'><NavLink to='/alatulie'><span className='home__body--red'>This </span></NavLink>nerdy english to elvish translator</p>  
                    <p className='home__body'><NavLink to='/cedulify'><span className='home__body--orange'>This </span> </NavLink>wellness company's user portal</p> 
                </section> */}

                {/* TECH DETAILS */}
                {/* <section className='home__section'>
                    <h3 className='home__subheader'>brass tacks</h3>
                    <p className='home__body'>I typically design in<span className="home__body--indigo"> Figma </span></p>
                    <p className='home__body'>Build in<span className="home__body--blue"> React || Angular || Next.js </span></p>
                    <p className='home__body'>Spin up the back end with<span className="home__body--red"> Node.js </span></p>
                    <p className='home__body'>And manage data with<span className="home__body--orange"> Firebase || SQL</span></p>
                    <p className='home__body'>But I bet I can learn your framework too :~) </p>
                    <p className='home__body'>
                      <span className='home__body--indigo home__body--grow' onClick={showModal}>This </span>
                      is a list of more things I know.
                    </p>  
                <Modal modal={modal} hideStackModal={hideModal} isDarkMode={isDarkMode}/>
                </section> */}

                {/* LINKS */}
                {/* <section className='home__section'>
                    <h3 className='home__subheader'>links links links</h3>
                      <p className='home__body'>
                        Here's my
                        <span className="home__body--blue home__body--link" onClick={copyToClipboard}> email </span>
                        and
                        <a href={resume} target = "_blank">
                          <span className="home__body--blue home__body--link"> resume</span></a>
                      </p>

                      <p className='home__body'>You can find me on 
                        <a href='https://www.linkedin.com/in/suraya-clemens/' target="_blank">
                          <span className="home__body--red home__body--link"> LinkedIn </span>
                        </a>
                      </p>

                      <p className='home__body'>And browse my commits on 
                        <a href='https://github.com/surayaclemens' target="_blank">
                          <span className="home__body--orange home__body--link"> GitHub </span>
                        </a>
                      </p>

                      <p className='home__body'>TTYL!</p>
                </section> */}


            </main>
      </div>
    );
  }

export default HomePage;