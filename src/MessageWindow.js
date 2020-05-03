import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageLine from "./MessageLine";

export default class MessageWindow extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  };

  render() {
    const { messages, user } = this.props;
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <MessageLine user={user} message={message} key={index} />
        ))}
      </ul>
    );
  }
}
