import './VanBrosPage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import vanbrosHero from '../../Assets/project-shots/van-bros/hero.png';
import vanbrosFeature1 from '../../Assets/project-shots/van-bros/feature1.png';
import vanbrosFeature2 from '../../Assets/project-shots/van-bros/feature2.png';
import vanbrosMore1 from '../../Assets/project-shots/van-bros/more1.png';
import vanbrosMore2 from '../../Assets/project-shots/van-bros/more2.png';
import vanbrosMore3 from '../../Assets/project-shots/van-bros/more3.png';
import vanbrosMore4 from '../../Assets/project-shots/van-bros/more4.png';


function VanBrosPage ({projectTitle}) {
  document.title=`${projectTitle}`

  return (
    <main className='vanbros'>
      <ProjectTemplate 
        projectTitle={<h1 className='vanbros__title'>Van Brothers</h1>}
        projectImage={vanbrosHero}
        overviewDetails={<p className='section__details'>Van Brothers is a renowned concrete forming company, sustainable construction leader, and proud member of the BC Formwork Association. In this contract, the ask was to re-brand and overhaul their existing marketing site with the aim of staying relevant, attracting new clients, and empowering the owners to more easily manage their content.</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>Web designer</li>
            <li className='section__list-item'>UX and UI design</li>
            <li className='section__list-item'>Copywriting and editing</li>
            <li className='section__list-item'>Build out with CMS</li>
            <li className='section__list-item'>Domain transfer and hosting</li>
          </ul>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosFeature1}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosFeature2}/>
          </div>
      }
      featureDetails={
        <p className='section__details'>One major pain point for the owners of Van Brothers was their contact page. Their previous website had one form that collected any and all submissions, leading to an overflowing, disorganized email inbox. My solution for them had two prongs: 1) Direct-to-mail buttons as an added safety against bots. 2) Funnel inquiries into either general or estimates. Now clients are put in touch with the appropriate staff and experience shorter wait times, and staff spend less time sorting through their inboxes; a win for everyone. We also added a large navigable map, and an easy-access "Call Now" button for clients to get in touch directly on their mobiles.</p>
        }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Meet with stakeholders to establish needs, limitations, scope, budget</li>
          <li className='section__list-item'>Map out existing information architecture and submit proposal for improvements</li>
          <li className='section__list-item'>Branding exercises to help stakeholders identify how they want to position their company in the space</li>
          <li className='section__list-item'>Design ideation, presentation, feedback, iteration</li>
          <li className='section__list-item'>Build out on Squarespace CMS</li>
          <li className='section__list-item'>Transfer existing domain to new host</li>
          <li className='section__list-item'>Hand off project with toolkit: documentation on how to update content, design kit to match brand</li>
          <li className='section__list-item'>Flex period for feedback, questions, assistance</li>

        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>Project scoping and budget estimating</li>
        <li className='section__list-item'>CMS capabilities and limitations</li>
        <li className='section__list-item'>Putting together a design kit</li>
      </ul>}
        moreDetails={
          <p className='section__details'>You can check out every screen of the Van Brothers website <a href='https://www.vanbros.ca/'>right here</a>.</p>
        }
        moreImages={
          <div className='carousel'>
            {/* <img className='carousel__image' alt=''src={vanbrosMore1}/>
            <img className='carousel__image' alt=''src={vanbrosMore3}/>
            <div className='carousel__wide'>
              <img className='carousel__wide-image' alt=''src={vanbrosMore4}/>
            </div> */}
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosMore1}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosMore2}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosMore3}/>
            <img className='carousel__double-image carousel__image--shadow' alt=''src={vanbrosMore4}/>
          </div>
        }
      />
    </main>
  );
}

export default VanBrosPage;