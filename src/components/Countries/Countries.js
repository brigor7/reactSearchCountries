import React, { Component } from 'react';
import Country from './Country';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <ul>
        <Country countries={countries} />
      </ul>
    );
  }
}
