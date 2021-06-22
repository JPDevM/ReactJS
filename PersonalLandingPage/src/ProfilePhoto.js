import React, { Component } from 'react';
import informal from './img/informal.png';

export default class ProfilePhoto extends Component {
  render() {
    return (
      <>
      <div className="img-profile">
        <img src={informal} alt="" height="60%" width="60%" />
      </div>
      </>
    )
  }
}
