// Components.
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

// Temporal 
import SettingMenu from './sttings/SettingMenu';

// Database Usado en activeSubscriptions.JS --> Traer desde JSON y ver como hacer con el logo.
const SubscriptionsArray = [
  {name: 'Spotify', logo: 'faSpotify', description: 'lo que puso el user', price: '3,50', firstpayment: '7 días'},
  {name: 'Facebook', logo: 'faFacebook', description: 'no puso nada', price: '7,00', firstpayment: '12 días'},
  {name: 'Instagram', logo: 'faInstagram', description: '', price: '0,00', firstpayment: '1 días'},
  {name: 'Icloud', logo: 'faIcloud', description: '2 TB', price: '10,00', firstpayment: '3 días'},
]

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
