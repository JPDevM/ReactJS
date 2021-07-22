import { NavLink } from 'react-router-dom';

import './_navbar.scss';

const Navbar = props => {
  let location = props.history.location.pathname;
  console.log('Navbar Component');
  console.log(location);

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        { 
          location === '/' ? 
          <NavLink className="navbar-brand text-white-50" to="/">Home</NavLink> :
          <NavLink className="navbar-brand text-white-50" to="/">Subscriptions</NavLink>
        }
        <NavLink className="navbar-brand text-white-50" to="/about">About</NavLink>
        <NavLink className="navbar-brand text-white-50" to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
