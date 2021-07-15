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
    <% let slideData_1={ imgUrl: "/img/landingPage/corousel-1.png" ,
      title: "Manage all your subscriptions in one easy space." , subtitle: null }; let slideData_2={
      imgUrl: "/img/landingPage/corousel-2.png" ,
      title: "Subtítulo The best financial assistant for your subscriptions." , subtitle: null }; let slideData_3={
      imgUrl: "/img/landingPage/corousel-3.png" , title: "Keep track of your subscriptions" ,
      subtitle: "Get insights in your fixed." }; %>

      <%- include('landing/carousel', {slideData_1, slideData_2, slideData_3}) %>

  </div>)
}

export default LandingPage

