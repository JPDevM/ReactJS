// Dependencies
import React, { Fragment, useState, useEffect } from 'react';

// Components
import ActiveSubscriptions from './ActiveSubscription';
import EmptySubscriptionsList from './EmptySubscriptionsList';

const ActiveList = () => {

const [subscription, setSubscriptions] = useState(null);
// const [amount, setAmount] = useState(null);

useEffect(() => {
  const url = 'http://localhost:5000/subscriptions/active';

  // Fetch subscriptions from the API when component mounts
  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      let activeSubscriptions = data.data;
      console.log(activeSubscriptions);

      // let amount = activeSubscriptions.reduce((acum, sub) => {
      //   return acum + Number(sub.price);
      // }, 0);
      // console.log(amount.toFixed(2));

      setSubscriptions(activeSubscriptions);
      // setAmount(amount);
    } catch (error) {
      console.log('error', error);
    }
  };

  fetchSubscriptions();
}, []);

  return (
    <Fragment>
      {/* Active subscriptions */}
      {!subscription && <EmptySubscriptionsList />}
      {subscription && (
        <>
          {subscription.map((subscription, index) => (
            <ActiveSubscriptions
              key={index}
              dataDB={subscription}
            />
          ))}
        </>
      )}
    </Fragment>
  );
}

export default ActiveList;
