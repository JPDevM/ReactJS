// Dependencies
import React, { Fragment } from 'react';

const information = () => {
  return (
    <Fragment>
      {/* Información */}
      <div className="col-12">
        <p className="text-white-50 mb-0 mt-4 text-uppercase">
          <small>Information</small>
        </p>
      </div>

      <div className="col-12 bg-dark-light border-setting-top">
        {/* <a href=""> */}
        <div className="row align-items-center my-2">
          <div className=" col-7 text-white text-truncate">
            <p className="my-0">Comments</p>
          </div>
          <div className="col-5 text-white-50 text-right">
            <p className="my-0 text-truncate">
              info@info.com
              <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
            </p>
          </div>
        </div>
        {/* </a> */}
      </div>

      <div className="col-12 bg-dark-light border-setting-top">
        {/* <a href=""> */}
        <div className="row align-items-center my-2">
          <div className=" col-10 text-white text-truncate">
            <p className="my-0">About</p>
          </div>
          <div className="col-2 text-white-50 text-right">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        {/* </a> */}
      </div>

      <div className="col-12 py-2 text-white border-setting-top border-setting-bottom text-truncate">
        {/* <a href=""> */}
        <p className="my-0 text-primary text-truncate">Rate the app</p>
        {/* </a> */}
      </div>

      <div className="col-12 text-center mt-3">
        <i className="fa fa-heart text-danger" aria-hidden="true"></i>
        <p>
          <small>v 0.1</small>
        </p>
      </div>
    </Fragment>
  );
};

export default information;
