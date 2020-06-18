import React, { Component, Fragment } from 'react';

export default class InfoCountry extends Component {
  render() {
    const { label, value } = this.props;
    return (
      <Fragment>
        <label>{label}</label>
        <input type="text" disabled value={value} />
      </Fragment>
    );
  }
}
