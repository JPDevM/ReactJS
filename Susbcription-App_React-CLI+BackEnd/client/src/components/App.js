// Packages
import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import SettingMenu from './settings/SettingMenu';

//ActiveSubscriptionDB Doesn't work
// fetch('http://localhost:5000/subscriptions')
//   .then((response) => response.json())
//   .then((data) => {
//     return data.status;
//   })
//   .catch((error) => console.log(error));

const App = () => {
  // fetch subscriptions from the API when component mounts
  const [subscription, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const subscription = setSubscriptions(data);
        console.log(subscription);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const [location, setLocation] = useState('/');

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="App">
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
          <Main allSubscriptions = { subscription } />
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
