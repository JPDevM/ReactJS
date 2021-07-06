import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const url = 'http://localhost:5000/subscriptions';
  const [subscription, setSubscriptions] = useState([]);
  
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.data);
        const subscription = response;
        setSubscriptions({ subscription });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ul>
        {
          subscription.map(oneSubscription => <li key={oneSubscription.data.id}>{oneSubscription.name}</li>)
        }
      </ul>
        
    </>
  );
}

export default DataFetching;
