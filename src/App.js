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
        <h3>Search of Countries</h3>
        <Countries countries={allCountries} />
      </div>
    );
  }
}
