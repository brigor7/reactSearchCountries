import React, { Component } from 'react';
import Countries from './components/Countries/Countries';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
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
      filteredCountries: allCountries,
    });
  }

  handleChangeInput = (event) => {
    const { allCountries } = this.state;
    const digtCountry = event.target.value.toLowerCase();
    const filteredCountries = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(digtCountry);
    });
    this.setState({
      filteredCountries,
    });
  };

  render() {
    const { allCountries, filteredCountries } = this.state;
    return (
      <div className="container">
        <div class="row">
          <h3>Search and information of countries in the world</h3>
        </div>
        <div className="row">
          <label for="nameCountry">Country´s name:</label>
          <input
            type="text"
            id="nameCountry"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="row">
          <div className="col s5">
            <h4>List of Countries</h4>
            <Countries countries={filteredCountries} />
          </div>
          <div className="col s7">
            <h4>Details of Country</h4>
          </div>
        </div>
      </div>
    );
  }
}
