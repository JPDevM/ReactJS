import { NavLink } from 'react-router-dom';

import './_navbar.scss';

const Navbar = (props) => {

 var { location } = props; 

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">

        
        {/* Left NavBar */}
        {location === '/' ? (
          <NavLink className="navbar-brand text-white-50" to="/">
            Home
          </NavLink>
        ) : (
          <NavLink className="navbar-brand text-white-50" to="/">
            Subscriptions
          </NavLink>
        )}

        {/* Landing Page */}
        <NavLink className="navbar-brand text-white-50" to="/landing">
          Landing Page from Nabvar
        </NavLink>

        <NavLink className="navbar-brand text-white-50" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
