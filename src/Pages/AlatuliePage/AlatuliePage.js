import './AlatuliePage.scss';
import ProjectTemplate from '../../Components/ProjectTemplate/ProjectTemplate';
import alatulieHero from '../../Assets/project-shots/alatulie/alatulie-hero.png';
import alatulieFeature1 from '../../Assets/project-shots/alatulie/select.png';
import alatulieFeature2 from '../../Assets/project-shots/alatulie/input.png';
import alatulieFeature3 from '../../Assets/project-shots/alatulie/output.png';
import alatulieFeature4 from '../../Assets/project-shots/alatulie/code.png';
import alatulieMore1 from '../../Assets/project-shots/alatulie/more1.png';
import alatulieMore2 from '../../Assets/project-shots/alatulie/more2.png';
import alatulieMore3 from '../../Assets/project-shots/alatulie/more3.png';
import alatulieMore4 from '../../Assets/project-shots/alatulie/more4.png';
import alatulieMore5 from '../../Assets/project-shots/alatulie/more5.png';



function AlatuliePage ({projectTitle}) {
  document.title=`${projectTitle}`

  return (
    <main className='Alatulie'>
      <ProjectTemplate 
        projectTitle={<h1 className='alatulie__title'>Alatúlie</h1>}
        projectImage={alatulieHero}
        overviewDetails={<p className='section__details'>Alatúlie is a fun and nerdy project I made with my friend Sam over a 24-hour hackathon in week 6 of our coding bootcamp. We combined her love of fantasy and my love of languages to build this English to Elvish translator for fellow Lord of the Rings fans.</p>}
        roleDetails={
          <ul className='section__list'>
            <li className='section__list-item'>UX and UI design</li>
            <li className='section__list-item'>Copywriting and editing</li>
            <li className='section__list-item'>Front-end web development in React with SCSS</li>
            <li className='section__list-item'>Responsiveness for mobile, tablet, desktop</li>
          </ul>
        }
        featureDetails={
        <p className='section__details'>The main event of this little app is the translator. When we couldn’t find an existing API for the Quenya or Sindarin languages, we decided to write our own. Since this was a small and extremely fast-paced project, we gathered the language data and compiled it into a local JSON file. When users input an English word and hit “translate” , the program searches the backend for a match and spits out the Elvish equivalent instantaneously.</p>
        }
        featureImages={
          <div className='carousel'>
            <img className='carousel__image carousel__image--shadow' alt=''src={alatulieFeature1}/>
            <img className='carousel__image carousel__image--shadow' alt=''src={alatulieFeature2}/>
            <img className='carousel__image carousel__image--shadow' alt=''src={alatulieFeature3}/>
            <img className='carousel__image carousel__image--shadow' alt=''src={alatulieFeature4}/>

          </div>
      }
      processDetails={
        <ul className='section__list'>
          <li className='section__list-item'>Ideation, scoping a 24-project</li>
          <li className='section__list-item'>Wireframe UX process and make mid-fi mockups</li>
          <li className='section__list-item'>Set up the front-end React project and Node.js server</li>
          <li className='section__list-item'>Gather language data</li>
          <li className='section__list-item'>Compile data into JSON in custom schema</li>
          <li className='section__list-item'>Build out front end according to designs</li>
          <li className='section__list-item'>Connect client side to server-side endpoints</li>
          <li className='section__list-item'>Iterate on UI</li>

        </ul>
      }
      toolDetails={
      <ul className='section__list'>
        <li className='section__list-item'>Project scoping with strict deadlines</li>
        <li className='section__list-item'>Demo & presentation skills</li>
        <li className='section__list-item'>Pair programming</li>
        <li className='section__list-item'>Version control</li>
      </ul>}
        moreDetails={
          <p className='section__details'></p>
        }
        moreImages={
          <div className='carousel'>
            <img className='carousel__image' alt=''src={alatulieMore1}/>
            <img className='carousel__image' alt=''src={alatulieMore2}/>
            {/* <img className='carousel__image' alt=''src={alatulieMore3}/> */}
            <div className='carousel__wide'>
              <img className='carousel__wide-image' alt=''src={alatulieMore4}/>
              <img className='carousel__wide-image' alt=''src={alatulieMore5}/>
            </div>
          </div>
        }
      />
    </main>
  );
}

export default AlatuliePage;