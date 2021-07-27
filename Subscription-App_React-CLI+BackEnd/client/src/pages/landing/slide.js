// Dependencies
import React, { Fragment } from 'react';

const Slide = ({ imgUrl, title, subtitle }) => {
  return (
    <Fragment>
      <div className="carousel-item active">
        <img className="d-block w-100" src={imgUrl} alt="Slide" />
        <div className="carousel-caption">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Slide;
