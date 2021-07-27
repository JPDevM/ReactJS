import { NavLink, useHistory } from 'react-router-dom';

import './_navbar.scss';

const Navbar = () => {

  const history = useHistory();
  console.log(history);
  const location = history.location.pathname;

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        {/* Left NavBar */}
        <NavLink 
          className="navbar-brand text-white-50" 
          to={location === '/subscriptions' ? '/settings' : '/subscriptions'}
        >
          <i className={`fas ${location === '/subscriptions' ? 'fa-cog' : 'fa-star' }`}></i>
        </NavLink>

        {/* Left NavBar */}
        {location === '/' ? <p>Subscriptions</p> : <p>Settings</p>}

        {/* Right NavBar */}
        <NavLink 
          className="navbar-brand text-white-50" 
          to={location === '/subscriptions' ? '/popular' : '/add'}
        >
          Popular
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
