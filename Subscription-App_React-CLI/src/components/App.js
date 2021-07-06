// Packages
import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import SettingMenu from './sttings/SettingMenu';

// Database for test. 
import ActiveSubscriptionDB from '../data/ActiveSubscription.json';
import PopularSubscriptionDB from '../data/PopularSubscription.json';
import SubscriptionDB from '../data/Subscription.json';

const App = () => {

  const [location, setLocation] = useState('/');

  useEffect(() => {
    // console.log(location);
  }, [location])
  
  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/"
              onClick={() => setLocation('/')}
            >Active Subscriptions</Link>
          </li>
          <li>
            <Link to="/PopSubs"
              onClick={() => setLocation('PopSubs')}
            >Popular Subscriptions</Link>
          </li>
          <li>
            <Link to="/AllSubs"
              onClick={() => setLocation('AllSubs')}
            >All Subscriptions</Link>
          </li>
          <li>
            <Link to="/settings"
              onClick={() => setLocation('settings')}
            >Settings</Link>
          </li>
        </ul>

        <Menu activeSection={location} />

        <Switch>
          <Route path="/settings">
            <SettingMenu />
          </Route>

          <Route path="/">
            <Main subs = { ActiveSubscriptionDB }/>
            <Footer />
          </Route>
          
          <Route path="/PopSubs">
            <Main subs = { PopularSubscriptionDB }/>
            <Footer />
          </Route>
          
          <Route path="/AllSubs">          
            <Main subs = { SubscriptionDB }/>
            <Footer />
          </Route>
        </Switch>
    
      </div>

  );
}

export default App;
