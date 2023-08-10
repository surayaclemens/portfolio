import './CedulifyPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import cedulifyHero from '../../Assets/project-shots/cedulify/cedulify-hero.png';
import cedulifyFeature1 from '../../Assets/project-shots/cedulify/journal1.png';
import cedulifyFeature2 from '../../Assets/project-shots/cedulify/journal2.png';
import cedulifyFeature3 from '../../Assets/project-shots/cedulify/journal3.png';
import cedulifyFeature4 from '../../Assets/project-shots/cedulify/journal4.png';
import cedulifyFeature5 from '../../Assets/project-shots/cedulify/journal5.png';
import cedulifyFeature6 from '../../Assets/project-shots/cedulify/journal6.png';
import cedulifyFeature7 from '../../Assets/project-shots/cedulify/journal7.png';
import cedulifyFeature8 from '../../Assets/project-shots/cedulify/journal8.png';
import cedulifyFeature9 from '../../Assets/project-shots/cedulify/journal9.png';
import cedulifyMore1 from '../../Assets/project-shots/cedulify/verifyEmail.png';
import cedulifyMore2 from '../../Assets/project-shots/cedulify/notVerified.png';
import cedulifyMore3 from '../../Assets/project-shots/cedulify/profile.png';
import cedulifyMore4 from '../../Assets/project-shots/cedulify/notifications.png';
import cedulifyMore5 from '../../Assets/project-shots/cedulify/calendar-home.png';
import cedulifyMore6 from '../../Assets/project-shots/cedulify/journal-home.png';


function CedulifyPage ({projectTitle}) {
  document.title=`${projectTitle}`

  return (
    <main className='cedulify'>
      <ProjectTemplate 
        projectTitle={<h1 className='cedulify__title'>Cedulify</h1>}
        projectImage={cedulifyHero}
        overviewDetails={<p className='section__details'>Cedulify is a mobile app that allows you to take charge of your life balance and life schedule through occupational science, positive psychology, and mindfulness. I'm currently the Front-end Lead and Project Coordinator on this startup’s team of 10.</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>Oversee client side of the app</li>
            <li className='section__list-item'>Collaborate with UX/UI team on design</li>
            <li className='section__list-item'>Mobile development in Flutter + Dart</li>
            <li className='section__list-item'>Web development in Angular + Node.js</li>
            <li className='section__list-item'>Copywriting and editing</li>
            <li className='section__list-item'>Manage and facilitate Agile workflow</li>
          </ul>
        }
        featureDetails={
        <p className='section__details'>This flow answers the question: How might we encourage users to deeply reflect and find meaning in their day-to-day activities? With a calculated date selector, short journal-style prompts, and a celebratory animation at the end, this Weekly Reflection feature offers users a clean balance of guidance, ease, invitation, and freedom.</p>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature1}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature2}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature3}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature4}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature5}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature6}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature7}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature8}/>
            <img className='carousel__image carousel__image--shadow' alt='screenshot of weekly journal feature'src={cedulifyFeature9}/>
          </div>
      }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Identify needs from stakeholders</li>
          <li className='section__list-item'>Wireframe user flow, draft UX copy</li>
          <li className='section__list-item'>Receive feedback from stakeholders, design iteration</li>
          <li className='section__list-item'>Apply high-fi colours, images, branding</li>
          <li className='section__list-item'>Front and back-end development</li>
          <li className='section__list-item'>Local dev testing, bug fixes</li>
          <li className='section__list-item'>Release to staging app for team testing, bug fixes</li>
          <li className='section__list-item'>Release to production for users</li>
          <li className='section__list-item'>Rinse and repeat</li>
        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>Angular, TypeScript, Firebase, Node, Flutter, Dart</li>
        <li className='section__list-item'>Docker, Firebase Cloud Messaging, Facebook Conversions API, Stripe API, APNs</li>
        <li className='section__list-item'>Localization in Angular & Flutter</li>
        <li className='section__list-item'>How to say yes to really big challenges</li>
        <li className='section__list-item'>How to do business the human way</li>
      </ul>}
        moreDetails={
          <p className='section__details'>Cedulify is available for download on the App Store and Google Play, and you can find additional info on <a href='https://www.cedulify.com/'>their website</a>.</p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={cedulifyMore5}/>
            <img className='carousel__image' alt=''src={cedulifyMore1}/>
            <img className='carousel__image' alt=''src={cedulifyMore2}/>
            <img className='carousel__image' alt=''src={cedulifyMore3}/>
            <img className='carousel__image' alt=''src={cedulifyMore4}/>
            <img className='carousel__image' alt=''src={cedulifyMore6}/>
          </div>
        }
      />
    </main>
  );
}

export default CedulifyPage;