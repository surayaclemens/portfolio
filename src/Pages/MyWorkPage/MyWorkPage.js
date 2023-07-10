import './MyWorkPage.scss';
import { NavLink} from 'react-router-dom';
import { useState} from 'react';
import MobileNav from '../../Components/Nav/MobileNav';
import TopNav from '../../Components/Nav/TopNav';



function MyWorkPage () {

    //functions here

  document.title="My Work | Suraya Clemens"
    return (
      <div className='work'>
        {/* <TopNav /> */}
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