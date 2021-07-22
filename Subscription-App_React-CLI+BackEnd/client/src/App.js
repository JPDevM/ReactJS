import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './assets/css/app.scss';
import './assets/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ActiveSubscriptionsList from './components/Subscriptions/ActiveSubscriptionsList';
import EmptySubscriptionsList from './components/Subscriptions/EmptySubscriptionsList';

const About = ({text}) => <h2>Soy la sección ABOUT: {text}</h2>;

const Contact = (props) => <h6>Llegaste a la sección CONTACT</h6>;

function App() {
  const [subscription, setSubscriptions] = useState(null);

	let history = useHistory();

  useEffect(() => {
    const url = 'http://localhost:5000/subscriptions';

    // fetch subscriptions from the API when component mounts
   //  const fetchSubscriptions = async () => {
   //    try {
   //      const response = await fetch(url);
   //      const data = await response.json();

   //      let activeSubscriptions = data.data.filter(
   //        (oneSub) => oneSub.isActive === 1
   //      );

   //      let totalSubscriptions = activeSubscriptions.reduce((acum, sub) => {
   //        return acum + Number(sub.price)
   //      }, 0)
   //      console.log(totalSubscriptions.toFixed(2));

   //      let inActiveSubscriptions = data.data.filter(
   //        (oneSub) => oneSub.isActive === 0
   //      );
   //      // console.log(inActiveSubscriptions);

   //      setSubscriptions({
   //        active: activeSubscriptions,
   //        inActive: inActiveSubscriptions,
   //      });
   //    } catch (error) {
   //      console.log('error', error);
   //    }
   //  };

   //  fetchSubscriptions();
  }, []);

	return (
		<Fragment>
			<Navbar activeSection={'/'} history={history} />
			
			<Switch>

				<Route path='/' exact>
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
				</Route>
				
				<Route path='/about' render={ () => <About text='Saludos a todos' /> } />
				
				<Route path='/contact' component={Contact} />
			</Switch>

			<Footer />
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
