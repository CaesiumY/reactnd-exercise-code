import React from "react";
import PropTypes from "prop-types";

function MessageLine(props) {
  const { message, user } = props;
  return (
    <li
      className={
        message.username === user.username
          ? "message sender"
          : "message recipient"
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}

MessageLine.propTypes = {
  message: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default MessageLine;
