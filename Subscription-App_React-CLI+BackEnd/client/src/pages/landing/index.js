import { Link } from 'react-router-dom';

// Styles
import './_landing.scss';

// Resources
import Logo from '../../assets/img/logo/logo_lg.png';

// Components
import Carousel from './carouselV2';

export const LandingPage = () => {
  return (
    <div id="body-landing">
      {/* Menú */}
      <div className="container">
        <div className="row my-2">
          <Link
            to="/users/login"
            className="btn btn-outline-primary mx-2 logInBtn align-self-center btn-lg w-100"
          >
            Log In
          </Link>
        </div>
        <div className="row my-2">
          <Link
            to="/users/register"
            className="btn btn-outline-primary mx-2 SigInBtn align-self-center btn-lg w-100"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Logo */}
      <section>
        <div className="logo">
          <img className="img-fluid" src={Logo} alt="subscription app logo" />
        </div>
      </section>

      {/* Carousel */}
      <Carousel />
    </div>
  );
};

export default LandingPage;
