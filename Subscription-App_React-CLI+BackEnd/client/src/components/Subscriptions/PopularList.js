// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import PopularSubscriptions from './PopularSubscriptions';
import EmptyList from './EmptyList';
import Layout from '../Layout';

const PopularList = () => {
  const [subscription, setSubscriptions] = useState(null);

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions/popular';

    // Fetch subscriptions from the API when component mounts
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        let popularSubscriptions = data.data;
        console.log(popularSubscriptions);

        setSubscriptions(popularSubscriptions);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <Layout>
      {/* Popular subscriptions */}
      {!subscription && <EmptyList />}
      {subscription && (
        <>
          {subscription.map((subscription, index) => (
            <PopularSubscriptions key={index} dataDB={subscription} />
          ))}
        </>
      )}
    </Layout>
  );
};

export default PopularList;
