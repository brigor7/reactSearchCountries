import React, { Component } from 'react';
import Countries from './components/Countries/Countries';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
    };
  }
  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map((country) => {
      return {
        id: country.numericCode,
        name: country.name,
        namePT: country.translations.pt,
        flag: country.flag,
        capital: country.capital,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        languages: country.languages,
      };
    });

    this.setState({
      allCountries,
    });
  }

  render() {
    const { allCountries } = this.state;
    return (
      <div className="container">
        <div class="row">
          <h3>Search and information of countries in the world</h3>
        </div>
        <div className="row">
          <div className="col s5">
            <h4>List of Countries</h4>
            <Countries countries={allCountries} />
          </div>
          <div className="col s7">
            <h4>Details of Country</h4>
          </div>
        </div>
      </div>
    );
  }
}
