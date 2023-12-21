import './HomePage.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';

function HomePage () {


  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  // set initial state
  // let [dropBalls, setBallState] = useState(false);

  // const showValueBalls = () => {
  //   setBallState(true);
  //   console.log("Hey, thanks for opening the console! Hope you don't find any errors in here xo")
  // }

  document.title="Suraya Clemens | Web Developer"
    return (
      <div className='home'>
        <main className='home__main-content'>
            {/* INTRO SECTION */}
            <section className='home__section'>
                <h3 className='home__subheader'>nice to meet you</h3>
                <p className='home__body'>Hey, I'm Suraya 👋🏽 </p>
                <p className='home__body'>I'm a <span className="home__body--purple">full-stack web developer</span> and <span className="home__body--forest">designer </span>based on the west coast of Canada 🌊 on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ Nations.</p>
                <p className='home__body'>I see software development as a tool to combine my love of <span className="home__body--green">creating cool things </span>with my responsibility to work towards a <span className="home__body--pink">more equitable future. </span></p>
                <p className='home__body'>And I want to help you build an app that's both impressive and <span className="home__body--yellow">impactful.</span></p>
            </section>

            {/* BACKGROUND */}
            <section className='home__section'>
                <h3 className='home__subheader'>Long story short</h3>
                <p className='home__body'>I took the unconventional road to get here 📍 And worked in a ~lot~ of different fields along the way.</p>
                <p className='home__body'>Service, retail, healthcare, admin, research... you name it, I've probably dabbled in it. And each role gave me a unique perspective and set of skills that I wouldn't trade for anything &lt;3. </p>
                <p className='home__body'>My tapestry can look like a pretty tangled weave 🧶 but there are a few red threads throughout: <span className="home__body--purple">creativity</span>,<span className="home__body--forest"> curiosity</span>,<span className="home__body--green"> community</span>, and a fiery desire to do something <span className="home__body--yellow">meaningful</span>.</p>
                <p className='home__body'>As a developer I get to be creative, explore diverse industries, and belong to an enthusiastic group of lifelong learners. Making apps and websites like this one is a challenging, fulfilling, and endlessly fun way for me to build a bit more <span className="home__body--pink">beauty</span> into the world 💐 </p>  
            </section>

            {/* EDUCATION */}
            <section className='home__section'>
                <h3 className='home__subheader'>Relevant Education</h3>
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
                <h3 className='home__subheader'>Skills Grab Bag</h3>
                  <p className='home__body home__body'>React, Angular, Next.js, JavaScript, TypeScript, HTML, CSS, SCSS, Tailwind, Node.js, Express, Firebase, Flutter, MySQL, MongoDB, Heroku, AWS, Docker, Figma, Jira, Project Management, Wireframing, Prototyping, UX research, Copywriting, Public Speaking</p>
            </section>
            
            {/* TLDR */}
            <section className='home__section'>
                <h3 className='home__subheader'>TL;DR</h3>
                <p className='home__body'>
                I'm a passionate developer who relishes opportunities to learn new things and thrives in environments that are values-driven. My colleagues know me as an initiative-taker, problem solver, excellent communicator, and big fan of jokes in the workplace. My friends know me as a language dork, textile enthusiast, and lap-swimmer. Let's make something great together :~)</p>
            </section>
            <section className='home__section'>
              <NavLink className='home-button'to='/mywork'>
                <button className='home-button__button'>See my work</button>
              </NavLink>
            </section>
        </main>
      </div>
    );
  }

export default HomePage;