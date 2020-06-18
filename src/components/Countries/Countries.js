import React, { Component } from 'react';
import Country from './Country';

export default class Countries extends Component {
  handleClick = (event) => {
    this.props.onClickCountry(event);
  };

  render() {
    const { countries } = this.props;
    return (
      <ul>
        <Country countries={countries} onClickCountry={this.handleClick} />
      </ul>
    );
  }
}
