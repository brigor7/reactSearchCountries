import React, { Component } from 'react';

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
        name: country.name,
        namePT: country.translations.pt,
        capital: country.capital,
        population: country.population,
        id: country.numericCode,
        region: country.region,
        subregion: country.subregion,
        flag: country.flag,
        languages: country.languages,
      };
    });

    console.log(allCountries);

    this.setState({
      allCountries,
    });
  }

  render() {
    return (
      <div>
        <div>Search of Countries</div>
        <ul>
          <li>Teste</li>
          <li>Teste2</li>
        </ul>
      </div>
    );
  }
}
