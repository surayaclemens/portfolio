import './ContactPage.scss';
import resume from '../../Assets/suraya-clemens-resume.pdf';


function ContactPage () {

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
            <span className='main__link main__link--blue' onClick={copyToClipboard}> surayaclemens@gmail.com</span>
          </p>
          <p className='main__text'>Or if you're more of a linkedin person I'm at
            <span className='main__link main__link--red'> linkedin/surayaclemens
            </span>
          </p>
          <p className='main__text'>You can also lurk my commits on
            <span className='main__link main__link--orange'> github/surayaclemens
            </span>
          </p>
          <p className='main__text'>Or size me up old-school with my
            <span>
              <a className='main__link main__link--indigo' href={resume} target="_blank" rel="noopener noreferrer"> resume</a>
            </span>
          </p>
          <p className='main__text'>Let's make something great together :~)</p>
        </div>
      </main>
    );
}

export default ContactPage;