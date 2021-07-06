// Packages
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

 // Developer dependencies

// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import SettingMenu from './settings/SettingMenu';
import MostrarRespuesta from './MostrarRespuesta';

// Get Subscriptions from DB
// fetch('http://localhost:5000/subscriptions')


const App = () => {
  // fetch subscriptions from the API when component mounts
  const [subscription, setSubscriptions] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';

    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSubscriptions(data.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchSubscriptions();
  }, [subscription]);

  // Router
  const [location, setLocation] = useState('/');
  
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="App">
      <MostrarRespuesta/>
      { !subscription && <p>Cargando...</p> }
      {/* { subscription && subscription.map((subscription, index) => <p key={index}>{subscription.name}</p>) } */}
      { 
        subscription && 
        subscription
          .filter(subscription => subscription.isActive === 0) 
          .map((subscription, index) => <p key={index}>{subscription.name}</p>)
      }
      <ul>
        <li>
          <Link to="/" onClick={() => setLocation('/')}>
            Active Subscriptions
          </Link>
        </li>
        <li>
          <Link to="/PopSubs" onClick={() => setLocation('PopSubs')}>
            Popular Subscriptions
          </Link>
        </li>
        <li>
          <Link to="/AllSubs" onClick={() => setLocation('AllSubs')}>
            All Subscriptions
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={() => setLocation('settings')}>
            Settings
          </Link>
        </li>
      </ul>

      <Menu activeSection={location} />

      <Switch>
        <Route path="/settings">
          <SettingMenu />
        </Route>

        <Route path="/">
          <Main allSubscriptions={subscription} />
          <Footer />
        </Route>

        <Route path="/PopSubs">
          <Main /* subs = { PopularSubscriptionDB  } */ />
          <Footer />
        </Route>

        <Route path="/AllSubs">
          <Main /* subs = { SubscriptionDB } */ />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
