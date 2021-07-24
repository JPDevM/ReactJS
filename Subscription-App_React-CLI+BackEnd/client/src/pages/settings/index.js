// Dependences
import React, { Fragment } from 'react';

// CSS
import './_mainSetting.scss';

const setting = () => {
  return (
    <Fragment>
      {/* <%- include('../partials/header') %> */}

      <main className="bg-black">
        <section className="my-2">
          <div className="container-fluid">
            <div className="row">
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
                <p className="my-0 text-primary text-truncate">
                  Sync to iCloud now
                </p>
                {/* </a> */}
              </div>

              <div className="col-12 py-2 text-white border-setting-top text-truncate d-none">
                <p className="my-0 text-white-50 text-truncate">
                  <small>
                    Last synchronization on July 17, 2020 at 3:07 p.m.
                  </small>
                </p>
              </div>

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
                        <i
                          className="fa fa-angle-right ml-2"
                          aria-hidden="true"
                        ></i>
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
                        <i
                          className="fa fa-angle-right ml-2"
                          aria-hidden="true"
                        ></i>
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
                        <i
                          className="fa fa-angle-right ml-2"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Design */}
              <div className="col-12">
                <p className="text-white-50 mb-0 mt-4 text-uppercase">
                  <small>Design</small>
                </p>
              </div>

              <div className="col-12 bg-dark-light border-setting-top d-none">
                {/* <a href=""> */}
                <div className="row align-items-center my-2">
                  <div className=" col-10 text-white text-truncate">
                    <p className="my-0">App icon</p>
                  </div>
                  <div className="col-2 text-white-50 text-right">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
                {/* </a> */}
              </div>

              <div className="col-12 bg-dark-light border-setting-top">
                <a href="/theme">
                  <div className="row align-items-center my-2">
                    <div className=" col-10 text-white text-truncate">
                      <p className="my-0">Theme</p>
                    </div>
                    <div className="col-2 text-white-50 text-right">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 bg-dark-light border-setting-top border-setting-bottom">
                <a href="font">
                  <div className="row align-items-center my-2">
                    <div className=" col-10 text-white text-truncate">
                      <p className="my-0">Font</p>
                    </div>
                    <div className="col-2 text-white-50 text-right">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </a>
              </div>

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
                      <i
                        className="fa fa-angle-right ml-2"
                        aria-hidden="true"
                      ></i>
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
            </div>
          </div>
        </section>
      </main>

      {/* <%- include('../partials/footer') %> */}
    </Fragment>
  );
};

export default setting;
