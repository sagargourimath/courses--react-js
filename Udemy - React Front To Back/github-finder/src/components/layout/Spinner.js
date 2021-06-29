import React, { Component } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Component.Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Component.Fragment>
);

export default Spinner;
