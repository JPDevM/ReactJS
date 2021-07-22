import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/css/app.scss';
import './assets/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ClassComponent from './components/ClassComponent';
// import HookComponent from './components/HookComponent';
import ActiveSubscriptionsList from './components/Subscriptions/ActiveSubscriptionsList';
import EmptySubscriptionsList from './components/Subscriptions/EmptySubscriptionsList';

function App() {
  const [subscription, setSubscriptions] = useState(null);
  // const [amount, setAmount] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';

    // fetch subscriptions from the API when component mounts
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        let activeSubscriptions = data.data.filter(
          (oneSub) => oneSub.isActive === 1
        );

        let totalSubscriptions = activeSubscriptions.reduce((acum, sub) => {
          return acum + Number(sub.price)
        }, 0)
        console.log(totalSubscriptions.toFixed(2));

        let inActiveSubscriptions = data.data.filter(
          (oneSub) => oneSub.isActive === 0
        );
        // console.log(inActiveSubscriptions);

        setSubscriptions({
          active: activeSubscriptions,
          inActive: inActiveSubscriptions,
        });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <React.Fragment>
      {/* <ClassComponent/> */}
      {/* <hr /> */}
      {/* <HookComponent/> */}
      <hr />
      <Navbar activeSection={'/'} />

      {/* Inactive subscriptions */}
      {/* {subscription && (
        <>
          <h2>Inactivas</h2>
          {subscription.inActive.map((subscription, index) => (
            <ActiveSubscriptionsList
              key={index}
              inActiveSubscriptions={subscription}
            />
          ))}
        </>
      )} */}

      {/* Empty component */}
      {!subscription && <EmptySubscriptionsList />}

      {/* Active subscriptions */}
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

      {/* Calculate monthly payment */}
      {/* {subscription && setAmount(amount + subscription.price)}
      {console.log(setAmount)} */}

      <Footer />
    </React.Fragment>
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
