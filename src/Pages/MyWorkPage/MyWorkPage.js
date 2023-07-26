import './MyWorkPage.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect} from 'react';


function MyWorkPage () {

  document.title="My Work | Suraya Clemens"

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

    return (
      <div className='work'>
        <main className='list'>
          <NavLink className="list__link "to="/cedulify">Cedulify</NavLink>
          <NavLink className="list__link "to="/morphology">Morphology</NavLink>
          <NavLink className="list__link "to="/oddrealm">Odd Realm</NavLink>
          <NavLink className="list__link "to="/alatulie">Alatulie</NavLink>
          <NavLink className="list__link "to="/coffeeshop">Coffee Shop</NavLink>
        </main>
      </div>
    );
  }

export default MyWorkPage;