import { NavLink } from 'react-router-dom';

import './_navbar.scss';

const Navbar = (props) => {
  var { location } = props;

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        {/* Left NavBar */}
        {location === '/' ? (
          <NavLink className="navbar-brand text-white-50" to="/setting">
            <i class="fas fa-cog"></i>
          </NavLink>
        ) : (
          <NavLink className="navbar-brand text-white-50" to="/landing">
            <i class="far fa-file"></i>
          </NavLink>
        )}

        {/* Left NavBar */}
        {location === '/' ? <p>Subscriptions</p> : <p>Settings</p>}

        {/* Right NavBar */}
        {location === '/' ? (
          <NavLink className="navbar-brand text-white-50" to="/popular">
            <i class="far fa-star"></i>
          </NavLink>
        ) : (
          <NavLink className="navbar-brand text-white-50" to="/add">
            <i class="fas fa-plus"></i>
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
