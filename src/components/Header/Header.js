import React, { Component } from 'react';

export default class Header extends Component {
  handleInputChange = (event) => {
    this.props.onChangeFilter(event);
  };

  render() {
    const { filter } = this.props;
    return (
      <div className="row">
        <label>Country´s name:</label>
        <input
          type="text"
          id="nameCountry"
          value={filter}
          autofocus="true"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
