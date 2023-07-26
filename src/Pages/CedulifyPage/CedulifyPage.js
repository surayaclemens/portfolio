import './CedulifyPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import cedulifyHero from '../../Assets/project-shots/cedulify-hero.png';
import cedulifyFeature from '../../Assets/project-shots/weekly frames.png';
import cedulifyMore from '../../Assets/project-shots/Notifications.png';


function CedulifyPage ({projectTitle, projectImage, overviewDetails, roleDetails, featureDetails, featureImages, processDetails, moreDetails, moreImages}) {
  document.title=`${projectTitle}`

  return (
    <main className='cedulify'>
      <ProjectTemplate 
        projectTitle={'Cedulify'}
        projectImage={cedulifyHero}
        overviewDetails={'Cedulify is a mobile app that allows you to take charge of your life balance and life schedule through occupational science, positive psychology, and mindfulness. I was the front-end lead and project manager on this startup’s team of 8.'}
        roleDetails={'Front-end lead, Project Coordinator, UX and UI design, Copywriting and editing, Mobile development in Flutter + Dart, R&D for web app in Angular + Node.js, Oversee and facilitate Agile workflow'}
        featureDetails={'This flow answers the question: How might we encourage users to complete a weekly reflection? With a calculated date picker, short journal-style prompts, and a celebratory animation at the end, users receive a perfect balance of guidance, invitation, and freedom in this feature.'}
        featureImages={<img src={cedulifyFeature}/>}
        processDetails={'Identify need from stakeholders, Wireframe user flow, draft UX copy, Feedback from stakeholders, design iteration, Apply high-fi colours, images, branding, Development in Flutter app, Local dev testing, Release to staging app for team testing, Release to production for users'}
        moreDetails={'Cedulify is available for download on the App Store and Google Play, and you can find additional info on their website.'}
        moreImages={<img src={cedulifyMore}/>}
      />
    </main>
  );
}

export default CedulifyPage;