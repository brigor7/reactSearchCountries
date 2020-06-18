import React, { Component } from 'react';
import css from '../Countries/country.module.css';
import { formatNumber } from '../../helpers/formatHelpers';

export default class InfoCountry extends Component {
  showLanguages = (countryLanguages) => {
    const language = countryLanguages.reduce((acc, curr) => {
      return acc + curr.name + ', ';
    }, 0);
    return language;
  };

  render() {
    const { filter } = this.props;
    return filter.map((country) => {
      return (
        <div>
          <h4>Details of Country</h4>
          <span>
            <img className={css.avatar} src={country.flag} alt={country.name} />
          </span>
          <br />
          <label>Country´s name:</label>
          <input type="text" disabled value={country.name} />
          <label>Capital:</label>
          <input type="text" disabled value={country.capital} />
          <label>Population:</label>
          <input
            type="text"
            disabled
            value={formatNumber(country.population)}
          />
          <label>Region:</label>
          <input type="text" disabled value={country.region} />
          <label>Subregion:</label>
          <input type="text" disabled value={country.subregion} />
          <label>Languages:</label>
          <input
            type="text"
            disabled
            value={this.showLanguages(country.languages)}
          />
        </div>
      );
    });
  }
}
