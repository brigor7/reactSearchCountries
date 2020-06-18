import React, { Component } from 'react';
import css from '../Countries/country.module.css';
import { formatNumber } from '../../helpers/formatHelpers';

export default class InfoCountry extends Component {
  showLanguages = (countryLanguages) => {
    const language = countryLanguages.reduce((acc, curr) => {
      return acc + curr.name + ', ';
    }, 0);
    return language.replace('0', '');
  };

  render() {
    const { filter } = this.props;
    return filter.map((country) => {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Details of Country</h4>
            </div>
            <div className="col s2">
              <span>
                <img
                  className={css.avatar}
                  src={country.flag}
                  alt={country.name}
                />
              </span>
            </div>
            <div className="col s8">
              <p>{country.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <label>Capital:</label>
              <input type="text" readOnly value={country.capital} />
            </div>
            <div className="col s6">
              <label>Population:</label>
              <input
                type="text"
                readOnly
                value={formatNumber(country.population)}
              />
            </div>
            <div className="col s6">
              <label>Region:</label>
              <input type="text" readOnly value={country.region} />
            </div>
            <div className="col s6">
              <label>Subregion:</label>
              <input type="text" readOnly value={country.subregion} />
            </div>
            <div className="col s12">
              <label>Languages:</label>
              <input
                type="text"
                readOnly
                value={this.showLanguages(country.languages)}
              />
            </div>
          </div>
        </div>
      );
    });
  }
}
