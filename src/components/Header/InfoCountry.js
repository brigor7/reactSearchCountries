import React, { Component, Fragment } from 'react';

export default class InfoCountry extends Component {
  render() {
    const { filter } = this.props;
    return filter.map((country) => {
      return (
        <div>
          <label>"Country´s name"</label>
          <input type="text" disabled value={country.name} />
          <label>"Capital"</label>
          <input type="text" disabled value={country.capital} />
          <label>"Population"</label>
          <input type="text" disabled value={country.population} />
          <label>"Region"</label>
          <input type="text" disabled value={country.region} />
          <label>"Subregion"</label>
          <input type="text" disabled value={country.subregion} />
        </div>
      );
    });
  }
}
