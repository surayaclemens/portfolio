import './MorphologyPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import morphologyHero from '../../Assets/project-shots/morphology/morph-hero.png';
import morphologyFeature1 from '../../Assets/project-shots/morphology/DASHBOARD.png';
import morphologyFeature2 from '../../Assets/project-shots/morphology/DICTIONARY.png';
import morphologyMore1 from '../../Assets/project-shots/morphology/loading.png';
import morphologyMore2 from '../../Assets/project-shots/morphology/profile.png';
import morphologyMore3 from '../../Assets/project-shots/morphology/landing.png';
import morphologyMore4 from '../../Assets/project-shots/morphology/instruct.png';


function MorphologyPage ({projectTitle}) {
  document.title=`${projectTitle}`

  return (
    <main className='morphology'>
      <ProjectTemplate 
        projectTitle={<h1 className='morphology__title'>Morphology</h1>}
        projectImage={morphologyHero}
        overviewDetails={<p className='section__details'>Morphology is a gamified learning platform for heritage languages. My ultimate passion project, the app and its marketing site are 100% designed and developed by me. Landing page is available <a href='https://www.learnmorphology.ca/' target="_blank" rel="noreferrer">here</a>, MVP app coming soon!</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>Linguistic research & resource development</li>
            <li className='section__list-item'>UX and UI design</li>
            <li className='section__list-item'>Full-stack web development with Next.js</li>
            <li className='section__list-item'>Database architecture in Mongo Atlas</li>
            <li className='section__list-item'>Deployment with AWS Amplify</li>
            <li className='section__list-item'>Copywriting and editing</li>
            <li className='section__list-item'>Marketing</li>
          </ul>
        }
        featureDetails={
        <p className='section__details'>Along with the Tetris-inspired main game screen (a secret for now 🤫), the app will include a dictionary feature for learners to familiarize themselves with the vocabulary of a given language before practicing in game mode.</p>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={morphologyFeature1}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={morphologyFeature2}/>
          </div>
      }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Identify needs from learners</li>
          <li className='section__list-item'>Wireframe user flow, draft UX copy</li>
          <li className='section__list-item'>Brand design, iconography, hi-fi mockups</li>
          <li className='section__list-item'>Database design and planning</li>
          <li className='section__list-item'>Development and design iteration</li>
          <li className='section__list-item'>Testing, bug fixes, deployment</li>
          <li className='section__list-item'>Continued improvements and updates</li>
        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>So much! I challenged myself to a whole new stack:</li>
        <li className='section__list-item'>Next.js</li>
        <li className='section__list-item'>TailwindCSS</li>
        <li className='section__list-item'>Mongo DB</li>
        <li className='section__list-item'>AWS Amplify</li>
        <li className='section__list-item'>Giving myself grace on a learning curve</li>
        <li className='section__list-item'>Dreaming and aiming big 💥</li>
      </ul>}
        moreDetails={
          <p className='section__details'>The landing page is live! Take a look <a href='https://www.learnmorphology.ca/' target='_blank' rel='noreferrer'>here,</a> and check back for development updates.</p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={morphologyMore1}/>
            <img className='carousel__image' alt=''src={morphologyMore2}/>
            <div className='carousel__wide'>
              <img className='carousel__wide-image' alt=''src={morphologyMore3}/>
              <img className='carousel__wide-image' alt=''src={morphologyMore4}/>
            </div>
          </div>
        }
      />
    </main>
  );
}

export default MorphologyPage;