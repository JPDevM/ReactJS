// Dependences
import React, { Fragment } from 'react'

const preferences = () => {
  return (
    <Fragment>
      {/* My subscriptions */}
      <div className="col-12">
        <p className="text-white-50 mb-0 mt-4 text-uppercase">
          <small>My subscriptions</small>
        </p>
      </div>

      <div className="col-12 bg-dark-light border-setting-top">
        <a href="order">
          <div className="row align-items-center my-2">
            <div className=" col-7 text-white text-truncate">
              <p className="my-0">Sort Subscriptions by</p>
            </div>
            <div className="col-5 text-white-50 text-right">
              <p className="my-0 text-truncate">
                Payment Date
                <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-12 bg-dark-light border-setting-top">
        <a href="total">
          <div className="row align-items-center my-2">
            <div className=" col-7 text-white text-truncate">
              <p className="my-0">See Total as</p>
            </div>
            <div className="col-5 text-white-50 text-right">
              <p className="my-0 text-truncate">
                Average Expenses
                <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="col-12 bg-dark-light border-setting-top  border-setting-bottom">
        <a href="/currency">
          <div className="row align-items-center my-2">
            <div className=" col-7 text-white text-truncate">
              <p className="my-0">Default Currency</p>
            </div>
            <div className="col-5 text-white-50 text-right">
              <p className="my-0 text-truncate">
                EUR €
                <i className="fa fa-angle-right ml-2" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </a>
      </div>
    </Fragment>
  );
}

export default preferences
