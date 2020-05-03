import React, { Component } from "react";
import PropTypes from "prop-types";
import SendMessage from "./SendMessage";
import MessageWindow from "./MessageWindow";

export default class ChatWindow extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    postMessage: PropTypes.func.isRequired,
  };

  render() {
    const { user, messages, postMessage } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <MessageWindow messages={messages} user={user} />

        <SendMessage user={user} postMessage={postMessage} />
      </div>
    );
  }
}
