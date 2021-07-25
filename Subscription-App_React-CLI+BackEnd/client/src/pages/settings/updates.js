// Dependences
import React, { Fragment } from 'react';

const updates = () => {
  return (
    <Fragment>
      {/* Actualizaciones */}
      <div className="col-12">
        <p className="text-white-50 mb-0 mt-4 text-uppercase">
          <small>Updates</small>
        </p>
      </div>

      <div className="col-12 bg-dark-light border-setting-top border-setting-bottom">
        {/* <a href=""> */}
        <div className="row align-items-center my-2">
          <div className=" col-10 text-white text-truncate">
            <p className="my-0">See Updates</p>
          </div>
          <div className="col-2 text-white-50 text-right">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        {/* </a> */}
      </div>

      <div className="col-12 bg-dark-light border-setting-top d-none">
        {/* <a href=""> */}
        <div className="row align-items-center my-2">
          <div className=" col-10 text-white text-truncate">
            <p className="my-0">Restore Purchases</p>
          </div>
          <div className="col-2 text-white-50 text-right">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        {/* </a> */}
      </div>
    </Fragment>
  );
};

export default updates;
