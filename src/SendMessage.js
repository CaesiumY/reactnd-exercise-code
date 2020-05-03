import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SendMessage extends Component {
  static propTypes = {
    postMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  state = {
    message: "",
  };

  isDisabled = () => {
    if (this.state.message.length === 0) {
      return true;
    }
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState((state) => ({
      message: value,
    }));
  };

  handleSubmit = (e) => {
    const { postMessage, user } = this.props;
    e.preventDefault();

    postMessage(user.username, this.state.message);
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
