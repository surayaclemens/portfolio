import './ContactPage.scss';
import resume from '../../Assets/suraya-clemens-resume.pdf';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect} from 'react';


function ContactPage () {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  const copyToClipboard = () => {
    console.log('copy to clipboard')
    navigator.clipboard.writeText('surayaclemens@gmail.com');
    setTimeout(() => {
      alert('📧 📬 💌 Email copied to clipboard! 📧 📬 💌');
    }, 100);
  };

    document.title="Contact"
    return (
      <main className='main'>
        <div className='main__content'>
          <h3 className='main__subheader'>Get in touch</h3>
          <p className='main__text'>Drop me a line with some info about yourself and your project, and I'll get back to you asap!</p>
          <p className='main__text'>Here's my email
            <span className='main__link main__link--purple' onClick={copyToClipboard}> surayaclemens@gmail.com</span>
          </p>
          <p className='main__text'>Or if you're more of a LinkedIn person, I'm at
            <a href="https://www.linkedin.com/in/suraya-clemens/" target='_blank' rel="noreferrer" className='main__link main__link--forest'> linkedin/suraya-clemens
            </a>
          </p>
          <p className='main__text'>You can also check out my commits on
            <a href="https://github.com/surayaclemens" target='_blank' rel="noreferrer" className='main__link main__link--green'> github/surayaclemens
            </a>
          </p>
          <p className='main__text'>Or get it all in a neat
            <span>
              <a className='main__link main__link--pink' href={resume} target="_blank" rel="noreferrer"> resume </a>
            </span>
            package
          </p>
          <p className='main__text'>Let's make something great together :~)</p>
        </div>
      </main>
    );
}

export default ContactPage;