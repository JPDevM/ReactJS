import React from 'react';
import './ActiveSubscriptionsList.css';

const ActiveSubscriptionsList = (props) => {
  const { activeSubscription } = props;
  const {
    name,
    description,
    price,
    firstPayment,
    currency,
    style,
    logo,
    userId,
    colorId,
  } = activeSubscription;

  // listado de subscripciones
  return (
    <React.Fragment>
      <li
        className={`my-2 rounded subCard`}
        style={{
          backgroundColor: style ? style : 'green',
        }}
      >
        {/* <a  id="cardUser" 
              href="/">  Routear a editar esta card */}
        <div id="cardRow" className="row mx-0">
          { logo }

          {/* Name */}
          <div id="cardUserCenter" className="col-6">
            <div className="row">
              <div className="col-12">
                <p className="my-0 text-truncate">
                  <strong>{name}</strong>
                </p>
              </div>

              {/* Description */}
              <div className="col-12">
                <p className="my-0 text-truncate">
                  <small>{description}</small>
                </p>
              </div>
            </div>
          </div>

          <div id="cardUserRight" className="col">
            <div className="row">
              <div className="col-12">
                {/* Price */}
                <p className="text-right my-0 text-truncate">
                  {currency} <strong>{price}</strong>
                </p>
              </div>
              <div className="col-12">
                {/* Days to payment */}
                <p className="text-right my-0 text-truncate">{firstPayment}</p>
              </div>
            </div>
          </div>
        </div>
        {/* </a> */}
      </li>
    </React.Fragment>
  );
};

export default ActiveSubscriptionsList;
