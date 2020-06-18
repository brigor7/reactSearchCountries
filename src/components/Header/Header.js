import React, { Component } from 'react';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(event);
  };

  render() {
    const { filter } = this.props;
    return (
      <div className="row">
        <label for="nameCountry">Country´s name:</label>
        <input
          type="text"
          id="nameCountry"
          value={filter}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
