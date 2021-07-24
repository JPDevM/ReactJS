// Dependences
import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// CSS
import './assets/css/app.scss';
import './assets/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ActiveSubscriptionsList from './components/Subscriptions/ActiveSubscriptionsList';
import EmptySubscriptionsList from './components/Subscriptions/EmptySubscriptionsList';
import LandingPage from './pages/landing/index';
import Setting from './pages/settings/index';

function App() {
  const [subscription, setSubscriptions] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';

    // Fetch subscriptions from the API when component mounts
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        let activeSubscriptions = data.data;
        let amount = activeSubscriptions.reduce((acum, sub) => {
          return acum + Number(sub.price);
        }, 0);
        console.log(amount.toFixed(2));
        console.log(activeSubscriptions);

        setSubscriptions(activeSubscriptions);
        setAmount(amount);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <Fragment>
      <Switch>
        {/* Main Page */}
        <Route path="/" exact>
          {/* NavBar */}
          <Navbar location={'/'} />

          {/* Active subscriptions */}
          {!subscription && <EmptySubscriptionsList />}
          {subscription && (
            <>
              {subscription.active.map((subscription, index) => (
                <ActiveSubscriptionsList
                  key={index}
                  activeSubscription={subscription}
                />
              ))}
            </>
          )}

          {/* Footer */}
          <Footer amount={amount} />
        </Route>

        {/* Landing Page */}
        <Route path="/landing" exact>
          <LandingPage />
        </Route>

        {/* Setting Page */}
        <Route path="/setting" exact>
          <Setting />
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
