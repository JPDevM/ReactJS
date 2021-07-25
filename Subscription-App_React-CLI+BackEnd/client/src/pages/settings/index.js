// Dependencies
import React, { Fragment } from 'react';

// Styles
import './_mainSetting.scss';

// Components
import Navbar from '../../components/Navbar';
import General from './general';
import Preferences from './preferences';
import Design from './design.js';
import Updates from './updates.js';
import Information from './information.js';

const setting = () => {
  return (
    <Fragment>
      <Navbar location={'/setting'} />

      <main className="bg-dark">
        <section className="py-2">
          <div className="container-fluid">
            <div className="row">
              <General />

              <Preferences />

              <Design />

              <Updates />

              <Information />
            </div>
          </div>
        </section>
      </main>

      {/* <%- include('../partials/footer') %> */}
    </Fragment>
  );
};

export default setting;
