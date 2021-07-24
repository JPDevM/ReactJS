import Carousel from './carousel';

const LandingPage = () => {

  return (
  <div id="body-landing">
    {/* Menú */}
    <div className="container">
      <div className="row my-2">
        <a href="../users/login" className="btn btn-outline-primary mx-2 logInBtn align-self-center btn-lg w-100"
          role="button">
          Log In</a>
      </div>
      <div className="row my-2">
        <a href="../users/create" className="btn btn-outline-primary mx-2 SigInBtn align-self-center btn-lg w-100"
          role="button">
          Sign In</a>
      </div>
    </div>

    {/* Logo */}
    <section>
      <div className="logo">
        <img className="img-fluid" src="/img/logo/logo_lg.png" alt="subscription app logo" />
      </div>
    </section>

    {/* Carousel */}
    <Carousel />

  </div>)
}

export default LandingPage

