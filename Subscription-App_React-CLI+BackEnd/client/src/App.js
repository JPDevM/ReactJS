// Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import './assets/css/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Subscriptions from './components/Subscriptions';

// Pages
import LandingPage from './pages/landing';
import Setting from './pages/settings';

function App() {

  return (
    <Router>
      <Switch>
        {/* Main Page */}
        <Route path="/" exact component={LandingPage} />

        {/* User Subscriptions */}
        <Route path="/subscriptions" component={Subscriptions} />

        {/* Setting Page */}
        <Route path="/settings">
          <Setting />
        </Route>
      </Switch>
    </Router>
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
