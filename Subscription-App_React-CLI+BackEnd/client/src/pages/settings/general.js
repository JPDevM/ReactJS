// Dependences
import React, { Fragment } from 'react'

const general = () => {
  return (
    <Fragment>
      {/* General >>> Dysplay: None */}
      <div className="col-12 d-none">
        <p className="text-white-50 mb-0 mt-4 text-uppercase">
          <small>General</small>
        </p>
      </div>

      <div className="col-12 bg-dark-light border-setting-top d-none">
        {/* <a href="./"> */}
        <div className="row align-items-center my-2">
          <div className=" col-10 text-white text-truncate">
            <p className="my-0">Seguridad</p>
          </div>
          <div className="col-2 text-white-50 text-right">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        {/* </a> */}
      </div>

      <div className="col-12 bg-dark-light border-setting-top d-none">
        <form>
          <div className="form-check my-2 px-0 text-white">
            <input
              className="form-check-input custom-control-imput"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" for="defaultCheck1">
              Synchronization in iCloud
            </label>
          </div>
        </form>
      </div>

      <div className="col-12 py-2 text-white border-setting-top text-truncate d-none">
        {/* <a href=""> */}
        <p className="my-0 text-primary text-truncate">Sync to iCloud now</p>
        {/* </a> */}
      </div>

      <div className="col-12 py-2 text-white border-setting-top text-truncate d-none">
        <p className="my-0 text-white-50 text-truncate">
          <small>Last synchronization on July 17, 2020 at 3:07 p.m.</small>
        </p>
      </div>
    </Fragment>
  );
}

export default general
