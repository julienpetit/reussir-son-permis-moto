import React, { PureComponent } from 'react';
import './device.css';

class Device extends PureComponent {
  render() {
    return (
      <div className="device">
        <img src="/img/iphone6S-silver.png" alt="" className="device-img" />

        <img src="/img/screenshot-2.jpg" alt="" className="device-screenshot" />
      </div>
    );
  }
}

export default Device;
