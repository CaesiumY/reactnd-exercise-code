import React from "react";
import PropTypes from "prop-types";

function UserComponent(props) {
  return (
    <li>
      <p>Username: {props.user.userName}</p>
      <p>
        Played
        {props.showPlayedGames ? " " + props.user.playedGameNum + " " : " * "}
        Games
      </p>
    </li>
  );
}

UserComponent.propTypes = {
  user: PropTypes.object.isRequired,
  showPlayedGames: PropTypes.bool.isRequired,
};

export default UserComponent;
