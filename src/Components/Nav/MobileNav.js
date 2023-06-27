import './MobileNav.scss';
import { NavLink} from 'react-router-dom';


function MobileNav () {


    return (
      <nav className='mobile-nav'>
        <NavLink><h3 className=''>Home</h3></NavLink>
        <NavLink><h3 className=''>My Work</h3></NavLink>
        <NavLink><h3 className=''>Contact</h3></NavLink>
      </nav>
    );
  }

export default MobileNav;