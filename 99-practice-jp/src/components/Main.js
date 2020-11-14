// Components
import ActiveSubscription from './subscriptions/ActiveSubscription';

// CSS Custom Styles
import '../assets/css/Main.css';

const Main = props => {
	const { subs } = props;
	return (
    // listado de subscripciones
      <main className="container-fluid" role="main">
        <section className="mt-2">
          <ul className="p-0">

            { subs.map((brand, idx) => <ActiveSubscription key={idx} subscriptionData={brand} />) }
        
          </ul>
          {/* <p>Acá tienen que venir el listado completo de subscripciones (Subscription) y (PopularSubscription)</p> */}
        
        </section>
      </main> 
    )
  }
  
  export default Main;