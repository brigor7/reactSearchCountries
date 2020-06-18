import React, { Component } from 'react';

export default class Country extends Component {
  render() {
    const { countries } = this.props;
    return countries.map((country) => {
      return <li key={country.id}>{country.namePT}</li>;
    });
  }
}
