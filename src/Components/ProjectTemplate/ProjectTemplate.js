import './ProjectTemplate.scss';

function ProjectTemplate ({projectTitle, projectImage, overviewDetails, roleDetails, featureDetails, featureImages, processDetails, moreDetails, moreImages}) {
  document.title="project"

  return (
    <main className='project'>
      <h1 className='project__title'>{projectTitle}</h1>
      <img alt='render of project' src={projectImage}/>
      <section className='section'>
        <h3 className='section__subtitle'>Overview</h3>
        <div className='section__details'>{overviewDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>My Role</h3>
        <div className='section__details'>{roleDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>Feature Highlight</h3>
        <div className='section__details'>{featureDetails}</div>
        <div className='section__image-carousel'>{featureImages}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>The Process</h3>
        <div className='section__details'>{processDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>See More</h3>
        <div className='section__details'>{moreDetails}</div>
        <div className='section__image-carousel'>{moreImages}</div>
      </section>
      <section className='contact-cta'>
        <h2 className='contact-cta__line-one'>Like what you see? Send me a note!</h2>
        <h2 className='contact-cta__line-two'>surayaclemens@gmail.com</h2>
      </section>
    
    </main>
  );
}

export default ProjectTemplate;