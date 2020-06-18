import React, { Component } from 'react';
import css from './country.module.css';

export default class Country extends Component {
  render() {
    const { countries } = this.props;
    return countries.map((country) => {
      return (
        <li className={css.flexRow} key={country.id}>
          <img className={css.avatar} src={country.flag} />
          {country.namePT}
        </li>
      );
    });
  }
}
