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
        overviewDetails={<p className='section__details'>Morphology is an upcoming web app for learning heritage languages. My ultimate passion project, the app and its marketing site are 100% designed and developed by me. Coming soon!</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>Linguistic research</li>
            <li className='section__list-item'>UX and UI design</li>
            <li className='section__list-item'>Database architecture</li>
            <li className='section__list-item'>Web development in Next.js + Firebase</li>
            <li className='section__list-item'>Copywriting and editing</li>
            <li className='section__list-item'>Marketing</li>
          </ul>
        }
        featureDetails={
        <p className='section__details'>Along with the Tetris-inspired main game screen (a secret for now 🤫), the app will include a dictionary feature for learners to familiarize themselves with the vocabulary of a given language before practicing in game mode.</p>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__wide-image carousel__image--shadow' alt=''src={morphologyFeature1}/>
            <img className='carousel__wide-image carousel__image--shadow' alt=''src={morphologyFeature2}/>
          </div>
      }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Identify needs from learners</li>
          <li className='section__list-item'>Wireframe user flow, draft UX copy</li>
          <li className='section__list-item'>Brand design, iconography, hi-fi mockups</li>
          <li className='section__list-item'>Database design and planning, setup in Firebase</li>
          <li className='section__list-item'>Development and design iteration</li>
          <li className='section__list-item'>Testing, bug fixes, deployment</li>
          <li className='section__list-item'>Continued improvements and updates</li>
        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>Next.js, dev ops</li>
        <li className='section__list-item'>Figma prototyping</li>
        <li className='section__list-item'>How to dream big</li>
        <li className='section__list-item'>Patience 🙏🏽</li>
      </ul>}
        moreDetails={
          <p className='section__details'>You can expect to read more about Morphology (and play around with the game!) late 2023.</p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={morphologyMore1}/>
            <img className='carousel__image' alt=''src={morphologyMore2}/>
            <div className='carousel__wide'>
              <img className='carousel__wide-image' alt=''src={morphologyMore3}/>
              <img className='carousel__wide-image' alt=''src={morphologyMore4}/>
            </div>
            {/* <img className='carousel__image' alt=''src={cedulifyMore3}/>
            <img className='carousel__image' alt=''src={cedulifyMore4}/>
            <img className='carousel__image' alt=''src={cedulifyMore6}/> */}

          </div>
        }
      />
    </main>
  );
}

export default MorphologyPage;