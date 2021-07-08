import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ActiveSubscriptionsList from './components/Subscriptions/ActiveSubscriptionsList';

function App() {
  const [subscription, setSubscriptions] = useState(null);
  const [amount, setAmount] = useState(null);
  // const [error, setError] = useState(null);
  
  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';
    
    // fetch subscriptions from the API when component mounts
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

  return (
    <React.Fragment>
      <Navbar activeSection={'/'} />
      <p>
        <mark>Aquí comienza ActiveSubscriptionsList</mark>
      </p>
      {!subscription && <p>Cargando...</p>}
      {/* Poner aquí el componente vacío */}
      {subscription &&
        subscription
          .filter((subscription) => subscription.isActive === 0)
          .map((subscription, index) => (
            <ActiveSubscriptionsList
              key={index}
              activeSubscription={subscription}
            />
          ))}

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
