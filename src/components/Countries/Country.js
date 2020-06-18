import React, { Component } from 'react';
import css from './country.module.css';

export default class Country extends Component {
  handleClick = (event) => {
    this.props.onClickCountry(event);
  };

  render() {
    const { countries } = this.props;
    return countries.map((country) => {
      return (
        <li
          key={country.id}
          id={country.id}
          className={css.flexRow}
          onClick={this.handleClick}
        >
          <img className={css.avatar} src={country.flag} alt={country.name} />
          {country.name}
        </li>
      );
    });
  }
}
