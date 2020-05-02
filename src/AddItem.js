import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddItem extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}
