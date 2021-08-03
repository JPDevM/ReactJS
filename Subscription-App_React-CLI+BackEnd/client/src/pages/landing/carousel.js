// Dependencies
import React, { Fragment } from 'react';

// Components
import Slide from './slide';

const Carousel = () => {

  // Slide data
  const slide_1 = {
    imgUrl: '/img/landingPage/corousel-1.png',
    title: 'Manage all your subscriptions in one easy space.',
    subtitle: null,
  };
  const slide_2 = {
    imgUrl: '/img/landingPage/corousel-2.png',
    title: 'Subtítulo The best financial assistant for your subscriptions.',
    subtitle: null,
  };
  const slide_3 = {
    imgUrl: '/img/landingPage/corousel-3.png',
    title: 'Keep track of your subscriptions',
    subtitle: 'Get insights in your fixed.',
  };

  return (
    <Fragment>
      <div id="carousel-Landing" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Slide data={slide_1} />
          <Slide data={slide_2} />
          <Slide data={slide_3} />
        </div>

        <ol className="carousel-indicators">
          <li
            data-target="#carousel-Landing slide-one"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-Landing slide-two" data-slide-to="1"></li>
          <li
            data-target="#carousel-Landing slide-three"
            data-slide-to="2"
          ></li>
        </ol>

        <a
          className="carousel-control-prev"
          href="#carousel-Landing"
          role="button"
          data-slide="prev"
        >
          <p className="carousel-control-prev-text"> Back </p>
          <span className="sr-only"></span>
        </a>              

        <a
          className="carousel-control-next"
          href="#carousel-Landing"
          role="button"
          data-slide="next"
        >
          <p className="carousel-control-next-text"> Next </p>{' '}
          <span className="sr-only"></span>
        </a>
      </div>

      {/* Boostrap JavaScript */}
      {/* <script src="/js/jquery-3.5.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>

        <script>
          window.addEventListener('load', function () {
            const carousel = document.querySelector('#carousel-Landing');
            // Activate carousel
            carousel.carousel();
          });
        </script>       */}
    </Fragment>
  );
};

export default Carousel;