import DailiesSection from './DailiesSection';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation().pathname; 

  return(
    <>
      <div id='bg-nav'>
        <ul>
         <li id={(location === '/dailies') ? 'active' : ''}><Link to='/dailies'>Dailies</Link></li>
         <li id={(location === '/stats') ? 'active' : ''}><Link to='/stats'>Stats</Link></li>
         <li id={(location === '/todo') ? 'active' : ''}><Link to='/todo'>ToDo</Link></li>
         <li id={(location === '/bucket') ? 'active' : ''}><Link to='/bucket'>Bucket</Link></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;