// Dependencies
import React, { Fragment, useState, useEffect } from 'react';

// Components
import Layout from '../Layout';
import ActiveSubscriptions from './ActiveSubscription';
import EmptyList from './EmptyList';

const Active = () => {
	const [subscription, setSubscriptions] = useState(null);

	useEffect(() => {
		const url = 'http://localhost:5000/subscriptions/active';

		// Fetch subscriptions from the API when component mounts
		const fetchSubscriptions = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();

				let activeSubscriptions = data.data;

				setSubscriptions(activeSubscriptions);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchSubscriptions();
	}, []);

	return (
		<Layout>
			{/* Active subscriptions */}
			{!subscription && <EmptyList />}
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
		</Layout>
	);
}

export default Active;






