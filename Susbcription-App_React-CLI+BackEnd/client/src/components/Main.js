//Components
import ActiveSubscription from './subscriptions/ActiveSubscription';

const Main = (props) => {
  const { allSubscriptions } = props;
  console.log('props in main: ', allSubscriptions.data);
  // console.log('Status in main: ', allSubscriptions.metadata.message);
  return (
    // listado de subscripciones
    <main className="container-fluid" role="main">
      <section className="mt-2">
        <ul className="p-0">
          {JSON.stringify(allSubscriptions.data)}
          {/* {Object.keys(allSubscriptions).map((oneSubscription, idx) => {
            return <li key={idx}>{oneSubscription.data(idx)}</li>;
          })} 
           {allSubscriptions.foreach(function (oneSubscription, idx) {
            console.log(oneSubscription.data[idx]);
          })} */}
        </ul>
        <p>
          Acá tienen que venir el listado completo de subscripciones
          (Subscription) y (PopularSubscription)
        </p>
      </section>
    </main>
  );
};

export default Main;
