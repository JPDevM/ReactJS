// Dependencies
import React, { Fragment } from 'react';

// Styles
import './_empty.scss';

const EmptySubscription = () => {
  return (
    <Fragment>
      <div className="timeline-item my-1">
        <div className="animated-background">
          <div className="background-masker header-top"></div>
          <div className="background-masker header-left"></div>
          <div className="background-masker header-right"></div>
          <div className="background-masker header-bottom"></div>
          <div className="background-masker subheader-left"></div>
          <div className="background-masker subheader-right"></div>
          <div className="background-masker subheader-bottom"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmptySubscription;
