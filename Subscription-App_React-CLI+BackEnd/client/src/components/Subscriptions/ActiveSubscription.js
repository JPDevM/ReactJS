// Dependencies
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './_active.scss';

const ActiveSubscription = ({ dataDB }) => {
  const {
    id,
    name,
    description,
    price,
    currencySymbol,
    logo,
    color,
    nextPaymentDates,
  } = dataDB;
  const { mainColor, secondColor } = color;

  // listado de subscripciones
  return (
    <Fragment>
      <li
        className={`my-1 rounded subCard`}
        style={{
          backgroundColor: mainColor ? mainColor : 'green',
        }}
      >
        <Link id="cardUser" to={`/subscriptions/detail/${id}`}> 
        <div id="cardRow" className="row mx-0">
          <img
            src={logo}
            className="img-fluid brand-logo m-2"
            alt="brand logo"
          />

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
                  {currencySymbol} <strong>{price}</strong>
                </p>
              </div>
              <div className="col-12">
                {/* Days to payment */}
                <p className="text-right my-0 text-truncate">
                  {nextPaymentDates}
                </p>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default ActiveSubscription;
