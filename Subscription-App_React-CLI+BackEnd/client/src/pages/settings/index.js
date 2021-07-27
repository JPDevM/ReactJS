// Dependencies
import React from 'react';

// Styles
import './_mainSetting.scss';

// Components
import General from './general';
import Preferences from './preferences';
import Design from './design.js';
import Updates from './updates.js';
import Information from './information.js';
import Layout from '../../components/Layout';

const setting = () => {
  return (
    <Layout footerAmount={123.56}>
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
    </Layout>
  );
};

export default setting;
