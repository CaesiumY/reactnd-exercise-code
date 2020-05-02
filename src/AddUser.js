import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddUser extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };

  state = {
    user: { firstName: "", lastName: "", userName: "" },
    isUserExist: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isUserExist = this.isUserAlreadyExist(this.state.user.userName);

    if (!isUserExist) {
      this.props.createUser(this.state.user);
    }

    this.setState((state) => ({
      isUserExist,
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      ...state, // REVIEW - why?
      user: {
        ...state.user,
        [name]: value,
      },
    }));
  };

  isUserAlreadyExist = (typedUserName) => {
    const { users } = this.props;
    let value = false;

    users.forEach((user) => {
      console.log("user", user.userName);

      if (user.userName === typedUserName) {
        console.log(
          "AddUser -> isUserAlreadyExist -> user.userName === typedUserName",
          user.userName === typedUserName
        );
        value = true;
      }
    });
    return value;
  };

  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user;
    return !firstName || !lastName || !userName;
  };

  render() {
    const { firstName, lastName, userName } = this.state.user;
    return (
      <div>
        <h1>AddUser</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              placeholder="Type your first name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              placeholder="Type your last name"
            />
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.handleInputChange}
              placeholder="Type your username"
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
        {this.state.isUserExist ? (
          <p className="error">Your name has already exist.</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}
