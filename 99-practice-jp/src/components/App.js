// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import { render } from '@testing-library/react';

// Temporal, ya que hay que linkear los settingd con un routeador.
// import SettingMenu from './sttings/SettingMenu';

// Database Usado en activeSubscriptions.JS --> Traer desde JSON y ver como hacer con el logo.
// var SubscriptionsArray = JSON.parse('../data/ActiveSubscription.json');
const SubscriptionsArray = [
  {name: 'Spotify', logo: 'faSpotify', description: 'lo que puso el user', price: '3,50', firstpayment: '7 días', colorhexa: '55d656'},
  {name: 'Netflix', logo: 'faNetflix', description: 'no puso nada', price: '7,00', firstpayment: '12 días', colorhexa: 'ee3f43'},
  {name: 'Dropbox', logo: 'faDropbox', description: '', price: '0,00', firstpayment: '1 días', colorhexa: '3f46ed'},
  {name: 'Amazon Prime', logo: 'faAmazon', description: '', price: '3,99', firstpayment: '14 días', colorhexa: '3f46ed'},
  {name: 'Icloud', logo: 'faIcloud', description: '2 TB', price: '10,00', firstpayment: '3 días', colorhexa: '3f46ed'},]



function App() {
  return (

    <div className="App">
      <Menu />
      <Main subs = { SubscriptionsArray }/>
      <Footer />

      
      {/* Temporal */}
      {/* <SettingMenu /> */}
    </div>
  );
}

export default App;
