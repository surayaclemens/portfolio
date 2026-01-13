import './HomePage.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';

function HomePage () {


  const location = useLocation();
  useEffect(() => {
    console.log("Hey, thanks for opening the console! Hope you don't find any errors in here xo")
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);


  document.title="Suraya Clemens | Web Developer"
    return (
      <div className='home'>
        <main className='home__main-content'>
            {/* INTRO SECTION */}
            <section className='home__section'>
                <h3 className='home__subheader'>nice to meet you</h3>
                <p className='home__body'>Hey, I'm Suraya 👋🏽 </p>
                <p className='home__body'>I'm a <span className="home__body--purple">full-stack web developer</span> and budding <span className="home__body--forest">designer </span>based on the west coast of Canada 🌊 on the unceded lands of the xʷməθkʷəy̓əm, sḵwx̱wú7mesh, and səlilwətaɬ Nations.</p>
                <p className='home__body'>I see software development as a tool to combine my love of <span className="home__body--green">creating cool things </span>with my responsibility to work towards a <span className="home__body--pink">more beautiful and equitable</span> future.</p>
                <p className='home__body'>I want to help you build an app that's both <span className="home__body--yellow">impressive and impactful</span>!</p>
            </section>

            {/* BACKGROUND */}
            <section className='home__section'>
                <h3 className='home__subheader'>a bit more background</h3>
                <p className='home__body'>"A <span className="home__body--purple">jack-of-all-trades</span> is a master of none, but oftentimes better than a master of none." I like to think that's true. I did almost every job under the sun (service, teaching, research, sales, I could go on) before finding my place in tech. My meandering path used to feel scary, but now I think it's my <span className="home__body--forest">superpower</span>. With each role I developed different muscles, from empathy to patience to curiosity to grit, and I get to flex all of them as a dev. This industry can be a wild ride, but as a developer I get to be <span className="home__body--green">creative</span>, explore all kinds of problems and <span className="home__body--pink">solutions</span>, and belong to an enthusiastic community of <span className="home__body--yellow">lifelong learners</span>. Making apps and websites like this one is a challenging, fulfilling, and endlessly fun way for me to build a bit more beauty into the world 💐 </p>  
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
                <h3 className='home__subheader'>Skills Grab Bag</h3>
                  <p className='home__body home__body'>React, Angular, Next.js, JavaScript, TypeScript, HTML, CSS, Sass, Tailwind, Node.js, Express, Flutter, REST APIs, Firebase, MySQL, Heroku, AWS, Docker, Git, GitHub, Figma, Jira, Project Management, Wireframing, UX research, Copywriting, Public Speaking</p>
            </section>

          {/* CORE VALUES */}
            <section className='home__section'>
                <h3 className='home__subheader'>Core Values</h3>
                  <p className='home__body home__body'>Integrity, community, kindness, dedication, sustainability, efficiency, beauty, social impact, empathy, respect, responsibility</p>
            </section>
            
            {/* TLDR */}
            <section className='home__section'>
                <h3 className='home__subheader'>TL;DR</h3>
                <p className='home__body'>
                I'm a dedicated developer who relishes opportunities to learn new things and thrives in environments that are values-driven. My colleagues know me as an initiative-taker, problem solver, excellent communicator, and big fan of making work fun. My friends know me as a language dork, music fan, and avid sewist. Let's make something great together :~)</p>
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