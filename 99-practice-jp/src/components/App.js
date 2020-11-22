// Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import SettingMenu from './sttings/SettingMenu';

// Database Usado en activeSubscriptions.JS --> Traer desde JSON y ver como hacer con el logo.
// var SubscriptionsArray = JSON.parse('../data/ActiveSubscription.json');
const ActiveSubsArray = [
  {name: 'Spotify', logo: 'faSpotify', description: 'lo que puso el user', price: '3,50', firstpayment: '7 días', color: 'subCardColor-17'},
  {name: 'Netflix', logo: 'faNetflix', description: 'no puso nada', price: '7,00', firstpayment: '12 días', color: 'subCardColor-1'},
  {name: 'Dropbox', logo: 'faDropbox', description: '', price: '0,00', firstpayment: '1 días', color: 'subCardColor-9'},
  {name: 'Amazon Prime', logo: 'faAmazon', description: '', price: '3,99', firstpayment: '14 días', color: 'subCardColor-15'},
  {name: 'Icloud', logo: 'faIcloud', description: '2 TB', price: '10,00', firstpayment: '3 días', color: 'subCardColor-22'},];

const PopularSubsArray = [
  {name: 'POPSpotify', logo: 'faSpotify', description: 'lo que puso el user', price: '3,50', firstpayment: '7 días', color: 'subCardColor-17'},
  {name: 'POPNetflix', logo: 'faNetflix', description: 'no puso nada', price: '7,00', firstpayment: '12 días', color: 'subCardColor-1'},
  {name: 'POPDropbox', logo: 'faDropbox', description: '', price: '0,00', firstpayment: '1 días', color: 'subCardColor-9'},
  {name: 'POPAmazon Prime', logo: 'faAmazon', description: '', price: '3,99', firstpayment: '14 días', color: 'subCardColor-15'},];

const AllSubsArray = [
  {name: 'AllSpotify', logo: 'faSpotify', description: 'lo que puso el user', price: '3,50', firstpayment: '7 días', color: 'subCardColor-17'},
  {name: 'AllNetflix', logo: 'faNetflix', description: 'no puso nada', price: '7,00', firstpayment: '12 días', color: 'subCardColor-1'},
  {name: 'AllDropbox', logo: 'faDropbox', description: '', price: '0,00', firstpayment: '1 días', color: 'subCardColor-9'},];


function App() {
  return (

     <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Active Subscriptions</Link>
          </li>
          <li>
            <Link to="/PopSubs">Popular Subscriptions</Link>
          </li>
          <li>
            <Link to="/AllSubs">All Subscriptions</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/settings">
            <Menu />
            <SettingMenu />
          </Route>

          <Route path="/">
            <Menu />
            <Main subs = { ActiveSubsArray }/>
            <Footer />
          </Route>
          
          <Route path="/PopSubs">
            <Menu />
            <Main subs = { PopularSubsArray }/>
            <Footer />
          </Route>
          
          <Route path="/AllSubs">          
            <Menu />
            <Main subs = { AllSubsArray }/>
            <Footer />
          </Route>
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;
