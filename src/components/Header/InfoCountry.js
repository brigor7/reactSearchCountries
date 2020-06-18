import React, { Component, Fragment } from 'react';
import css from '../Countries/country.module.css';

export default class InfoCountry extends Component {
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
          <input type="text" disabled value={country.population} />
          <label>Region:</label>
          <input type="text" disabled value={country.region} />
          <label>Subregion:</label>
          <input type="text" disabled value={country.subregion} />
          <label>Languages:</label>
          <input type="text" disabled value={country.languages} />
        </div>
      );
    });
  }
}
