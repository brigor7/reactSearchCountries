import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import InfoCountry from './components/Header/InfoCountry';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredCountry: [],
      filter: '',
    };
  }
  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map((country) => {
      return {
        id: country.numericCode,
        name: country.name,
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

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
    const { allCountries } = this.state;
    const text = event.target.value;

    const filteredCountries = allCountries.filter((country) => {
      return country.name.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({
      filteredCountries,
    });
  };

  handleClick = (event) => {
    const { allCountries } = this.state;
    const filteredCountry = allCountries.filter((country) => {
      return country.id === event.target.id;
    });
    this.setState({ filteredCountry });
  };

  render() {
    const { filter, filteredCountries, filteredCountry } = this.state;
    return (
      <div className="container">
        <Header
          filter={filter}
          focus="true"
          onChangeFilter={this.handleChangeFilter}
        />
        <div className="row">
          <div className="col s12 m5">
            <h4>List of Countries</h4>
            <Countries
              countries={filteredCountries}
              onClickCountry={this.handleClick}
            />
          </div>
          <div className="col s12 m7">
            <InfoCountry filter={filteredCountry} />
          </div>
        </div>
      </div>
    );
  }
}
