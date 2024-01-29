import './MyWorkPage.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from '../../Components/Modal/Modal';


function MyWorkPage () {

  document.title="My Work | Suraya Clemens"

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  const [modalOpen, setModalOpen] = useState({
    cedulify: false,
    morphology: false,
    oddrealm: false,
    alatulie: false,
    vanbros: false,
    portfolio: false
  });

  const handleMouseOver = (linkKey) => {
    // console.log('mouse entered link');
    setModalOpen((prevState) => ({
      ...prevState,
      [linkKey]: true,
    }));
  }

  const handleMouseLeave = (linkKey) => {
    // console.log('mouse entered link');
    setModalOpen((prevState) => ({
      ...prevState,
      [linkKey]: false,
    }));
  }


    return (
      <div className='work'>
        <main className='list'>
          <NavLink onMouseEnter={() => handleMouseOver('morphology')} onMouseLeave={() => handleMouseLeave('morphology')} className="list__link "to="/morphology">
            Morphology
            {modalOpen.morphology && <Modal tags="web, next.js, tailwind, mongo, aws, design, education, linguistics"/>}
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseOver('cedulify')} onMouseLeave={() => handleMouseLeave('cedulify')} className="list__link "to="/cedulify">
            Cedulify
            {modalOpen.cedulify && <Modal tags="web, mobile, angular, scss, node.js, flutter, dart, material design, firebase, docker, wellness"/>}
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseOver('oddrealm')} onMouseLeave={() => handleMouseLeave('oddrealm')} className="list__link "to="/oddrealm">
            Odd Realm
            {modalOpen.oddrealm && <Modal tags="web, next.js, vercel, tailwind, design, gaming"/>}
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseOver('alatulie')} onMouseLeave={() => handleMouseLeave('alatulie')} className="list__link "to="/alatulie">
            Alatúlie
            {modalOpen.alatulie && <Modal tags="web, react, scss, design, fantasy, hackathon"/>}
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseOver('vanbros')} onMouseLeave={() => handleMouseLeave('vanbros')} className="list__link "to="/vanbros">
            Van Brothers
            {modalOpen.vanbros && <Modal tags="web, cms, design, branding, marketing site"/>}
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseOver('portfolio')} onMouseLeave={() => handleMouseLeave('portfolio')} className="list__link "to="/">
            This portfolio
            {modalOpen.portfolio && <Modal tags="web, react, scss, heroku, design, portfolio"/>}
          </NavLink>
        </main>
      </div>
    );
  }

export default MyWorkPage;