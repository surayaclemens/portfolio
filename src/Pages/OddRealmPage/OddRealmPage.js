import './OddRealmPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import oddrealmHero from '../../Assets/project-shots/odd-realm/hero.png';
import oddrealmFeature1 from '../../Assets/project-shots/odd-realm/or_feature-1.png';
import oddrealmFeature3 from '../../Assets/project-shots/odd-realm/or_feature-3.png';
import oddrealmMore1 from '../../Assets/project-shots/odd-realm/more1.png';
import oddrealmMore2 from '../../Assets/project-shots/odd-realm/more2.png';
import oddrealmMore3 from '../../Assets/project-shots/odd-realm/more3.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



function OddRealmPage ({projectTitle}) {
  document.title=`${projectTitle}`

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  return (
    <main className='oddrealm'>
      <ProjectTemplate 
        projectTitle={<h1 className='oddrealm__title'>Odd Realm</h1>}
        projectImage={oddrealmHero}
        overviewDetails={<p className='section__details'>Odd Realm is a colony-simulation PC game set in a procedurally-generated fantasy world, released August 2024. In this freelance contract, I created a brand identity and website in line with the game's bright personality.</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>UX and UI design</li>
            <li className='section__list-item'>Web development with Next.js and Tailwind</li>
            <li className='section__list-item'>Domain migration and deployment</li>
            <li className='section__list-item'>Brand cohesion, marketing materials</li>
          </ul>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={oddrealmFeature1}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={oddrealmFeature3}/>
            {/* <img className='carousel__double-image carousel__image--shadow' alt=''src={oddrealmFeature3}/> */}
          </div>
      }
      featureDetails={
        <p className='section__details'>Don't you hate having to come up with a subject line for an email? One of the special little features I put into this fun-loving site was a random subject generator for the contact submission form.</p>
        }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Identify needs from stakeholders</li>
          <li className='section__list-item'>Map out current information architecture and plan optimization</li>
          <li className='section__list-item'>Design ideation, presentation, feedback, iteration</li>
          <li className='section__list-item'>Project setup including localization</li>
          <li className='section__list-item'>Build with React and Node.js</li>
          <li className='section__list-item'>Testing, bug fixes, deployment</li>
        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>i18next, Tailwind</li>
        <li className='section__list-item'>Collaboration with game devs</li>
        <li className='section__list-item'>Problem solving</li>
      </ul>}
        moreDetails={
          <p className='section__details'>Check out the finished version <a className='section__link' target='_blank' href='https://www.oddrealmgame.com/'>here</a>.</p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={oddrealmMore1}/>
            <img className='carousel__image' alt=''src={oddrealmMore2}/>
            <img className='carousel__image' alt=''src={oddrealmMore3}/>
          </div>
        }
      />
    </main>
  );
}

export default OddRealmPage;