// Dependencies
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// Styles
import './assets/css/app.scss';
import './assets/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ActiveList from './components/Subscriptions';
import PopularList from './components/Subscriptions/PopularList';

// Pages
import LandingPage from './pages/landing';
import Setting from './pages/settings';

function App() {

  return (
    <Fragment>
      <Switch>
        {/* Main Page */}
        <Route path="/" exact>
          <Navbar location={'/'} />
          <ActiveList />
          <Footer amount={'32,50'} />
        </Route>

        {/* Landing Page */}
        <Route path="/landing" exact>
          <LandingPage />
        </Route>

        {/* Setting Page */}
        <Route path="/setting" exact>
          <Navbar location={'/setting'} />
          <Setting />
          <Footer amount={'32,50'} />
        </Route>

        {/* Add custom & Popular */}
        <Route path="/popular" exact>
          <Navbar location={'/popular'} />
          <PopularList />
          <Footer amount={'32,50'} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

/* ***********************************************
_   _              _   _                   _
| | | | ___ _   _  | |_| |__   ___ _ __ ___| |
| |_| |/ _ \ | | | | __| '_ \ / _ \ '__/ _ \ |
|  _  |  __/ |_| | | |_| | | |  __/ | |  __/_|
|_| |_|\___|\__, |  \__|_| |_|\___|_|  \___(_)
					 |___/

Looking at the source code, huh?
Make sure to write to me! I would love to chat
whether about code, undertakings,
longboard, anime or anything else.

I leave you the way to contact me
https://twitter.com/JPDevM --> for random topics
https://www.linkedin.com/in/juanpablodm/ --> if you need seriousness

- Juan Pablo Devecchi Martinengo or better still call me JP

*********************************************** */
