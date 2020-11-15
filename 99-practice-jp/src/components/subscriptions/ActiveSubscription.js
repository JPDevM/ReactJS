// CSS Styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

// CSS Custom Styles
import './SubscriptionCard.css';

const ActiveSubscription = props => {
	const { subscriptionData } = props;
	return (
    // Container 
    <li className="my-2">
      <a id="cardUser" href="/">
        <div>
          <div id="cardRow" className="row mx-0">
          
            {/* Logo */}
            <div className="col-2">
              <FontAwesomeIcon  icon={faSpotify} 
                                size="lg" 
                                color="green" />
            </div>

            {/* Name */}
            <div id="cardUserCenter" className="col-6">
              <div className="row">
                <div className="col-12">
                  <p className="my-0 text-truncate">
                   <strong>{subscriptionData.name}</strong>
                  </p>
                </div>

                {/* Description */}
                <div className="col-12">
                  <p className="my-0 text-truncate">
                  <small>{subscriptionData.description}</small>
                  </p>
                </div>
              </div>
            </div>
            
            <div id="cardUserRight" className="col">
              <div className="row">
                <div className="col-12">
                  
                  {/* Price */}
                  <p className="text-right my-0 text-truncate">
                    <strong>{subscriptionData.price} €</strong>
                  </p>
                </div>                  
                <div className="col-12">
                  
                  {/* Days to payment */}
                  <p className="text-right my-0 text-truncate">{subscriptionData.firstpayment}</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </a>
    </li>
      )
    }
    
    export default ActiveSubscription;