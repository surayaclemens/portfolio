import './OddRealmPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import oddrealmHero from '../../Assets/project-shots/odd-realm/hero.png';
import oddrealmFeature1 from '../../Assets/project-shots/odd-realm/presskit.png';
import oddrealmFeature2 from '../../Assets/project-shots/odd-realm/steamreviews.png';
import oddrealmMore1 from '../../Assets/project-shots/odd-realm/more1.png';
import oddrealmMore5 from '../../Assets/project-shots/odd-realm/more5.png';
import oddrealmMore3 from '../../Assets/project-shots/odd-realm/more3.png';
import oddrealmMore4 from '../../Assets/project-shots/odd-realm/more4.png';


function OddRealmPage ({projectTitle}) {
  document.title=`${projectTitle}`

  return (
    <main className='oddrealm'>
      <ProjectTemplate 
        projectTitle={<h1 className='oddrealm__title'>Odd Realm</h1>}
        projectImage={oddrealmHero}
        overviewDetails={<p className='section__details'>Odd Realm is a colony-simulation PC game set in a procedurally-generated fantasy world. In preparation for the game's big 1.0 release, the client needed a slick, on-brand website to market the game and serve their community.</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>UX and UI design, brand cohesion</li>
            <li className='section__list-item'>Understand stakeholder needs, iterate based on feedback</li>
            <li className='section__list-item'>Optimize information architecture</li>
            <li className='section__list-item'>Migrate previous newsletter subscribers to integrated CMS</li>
            <li className='section__list-item'>Web development with Next.js and Tailwind</li>
          </ul>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={oddrealmFeature1}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={oddrealmFeature2}/>
          </div>
      }
      featureDetails={
        <p className='section__details'>This dedicated indie dev has hundreds of positive reviews on their Steam store, which help potential new players learn why they'll love it too. When building this marketing site, we decided to feature these accolades along with the press kit, so anyone who wants to talk about the game is well equipped to do so!</p>
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
        <li className='section__list-item'>Next.js, tailwind</li>
        <li className='section__list-item'>Collaboration with game devs</li>
        <li className='section__list-item'>Problem solving for CMS integration</li>
      </ul>}
        moreDetails={
          <p className='section__details'>This project is currently under development - no live links yet! In the meantime, check out the game <a href='https://store.steampowered.com/app/688060/Odd_Realm/'>on Steam</a>.</p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={oddrealmMore1}/>
            {/* <img className='carousel__image' alt=''src={oddrealmMore2}/> */}
            <img className='carousel__image' alt=''src={oddrealmMore3}/>
            <div className='carousel__wide'>
              {/* <img className='carousel__wide-image' alt=''src={oddrealmMore5}/> */}
              <img className='carousel__wide-image' alt=''src={oddrealmMore4}/>
            </div>
          </div>
        }
      />
    </main>
  );
}

export default OddRealmPage;