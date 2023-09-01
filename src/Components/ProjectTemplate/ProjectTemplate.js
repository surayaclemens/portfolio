import './ProjectTemplate.scss';


function ProjectTemplate ({projectTitle, projectImage, overviewDetails, roleDetails, featureDetails, featureImages, processDetails, toolDetails, moreDetails, moreImages}) {
  
  document.title=`Project`

  const copyToClipboard = () => {
    console.log('copy to clipboard')
    navigator.clipboard.writeText('surayaclemens@gmail.com');
    setTimeout(() => {
      alert('📧 📬 💌 Email copied to clipboard! 📧 📬 💌');
    }, 100);
  };

  return (
    <main className='project'>
      <div className='overview'>
        <div className='overview__text'>
          <div>{projectTitle}</div>
          <section className='section'>
            <h3 className='section__subtitle'>Overview</h3>
            <div className='section__details section__details--narrow'>{overviewDetails}</div>
          </section>
        </div>
          <img className='project__hero-image'alt='render of project' src={projectImage}/>
      </div>
      <section className='section'>
        <h3 className='section__subtitle'>My Role</h3>
        <div className='section__details'>{roleDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>Feature Highlight</h3>
        <div className='section__image-carousel'>
          {featureImages}
        </div>
        <div className='section__details'>{featureDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>The Process</h3>
        <div className='section__details'>{processDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>Things This Project Taught Me</h3>
        <div className='section__details'>{toolDetails}</div>
      </section>
      <section className='section'>
        <h3 className='section__subtitle'>See More</h3>
        <div className='section__details'>{moreDetails}</div>
        <div className='section__image-carousel'>{moreImages}</div>
      </section>
      <section className='contact-cta'>
        <h2 className='contact-cta__text'>Like what you see? Send me a note!</h2>
        <h2 className='contact-cta__text contact-cta__text--color' onClick={copyToClipboard}>surayaclemens@gmail.com</h2>
      </section>
    
    </main>
  );
}

export default ProjectTemplate;