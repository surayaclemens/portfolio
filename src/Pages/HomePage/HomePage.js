import './HomePage.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';
import helloWorld from '../../Assets/hello_world_logo.svg';
import languageBall from '../../Assets/language_ball.svg';
import educationBall from '../../Assets/education_ball.svg';
import communityBall from '../../Assets/community_ball.svg';
import creativityBall from '../../Assets/creativity_ball.svg';
import techBall from '../../Assets/tech_ball.svg';
import Modal from '../../Components/Modal/Modal';

function HomePage () {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

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
                    <p className='home__body'>I'm a <span className="home__body--indigo">designer </span> and <span className="home__body--blue">full-stack web developer </span>based on the west coast of Canada, on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ Nations.</p>
                    <p className='home__body'>I see software development as a tool to combine my love of <span className="home__body--red animation-blink">creating cool things </span>with my responsibility to work towards a <span className="home__body--orange">more equitable future. </span></p>
                    <p className='home__body'>And I can help you build an app that's both <span className="home__body--yellow home__body--italic">impressive </span>and <span className="home__body--yellow home__body--bold">impactful.</span></p>
                    {/* <NavLink to='/moreaboutme'>
                      <h3 className='home__body home__body--link'>Get to know me here</h3>
                    </NavLink> */}
                </section>

                {/* BACKGROUND */}
                <section className='home__section'>
                    <h3 className='home__subheader'>Long story short</h3>
                    <p className='home__body'>I've always been a fan of gadgets and tech, but it wasn’t until I realized I could combine those little fascinations with other core passions that I considered a career in software.</p>
                    <div className='value-row'>
                      <img src={creativityBall} className='value-row__ball'/>
                      <img src={educationBall} className='value-row__ball'/>
                      <img src={techBall} className='value-row__ball'/>
                      <img src={languageBall} className='value-row__ball'/>
                      <img src={communityBall} className='value-row__ball'/>
                    </div>
                    <p className='home__body'>I loved playing around with computers and code, but coming from a humanities background, I was anxious that a career in tech would feel void of meaning (read: make me an evil sellout). When I heard about some local research using AI and VR to support Indigenous Language Revitalization and it alllll came together in two major insights that seem incredibly obvious now: not all tech is Big Bad Tech, and programming is a skill that can be applied to any industry. And the further I get into the field, the more I see an exciting future rich in meaning and purpose, using technical skills for social good.</p>
                    <p className='home__body'>Developing apps and websites (like this one!) is a challenging, fulfilling, and endlessly fun way for me to build a little more beauty into the world. Whether designing an intuitive interface, writing a sweet new script, or pursuing an exasperating bug, this work lights my brain up and I love that I get to make an impact for a living.</p>
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
                      <p className='home__body home__body'>Angular, React, JavaScript, TypeScript, HTML, CSS/SCSS, Node.js, Firebase, Flutter, Dart, Next.js, SQL, Figma, Jira, project management, wireframing, prototyping, UX research, copywriting, copyediting, public speaking</p>
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
            </main>
      </div>
    );
  }

export default HomePage;