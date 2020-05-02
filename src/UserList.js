import React, { Component } from "react";
import PropTypes from "prop-types";
import UserComponent from "./UserComponent";

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  state = {
    showPlayedGames: false,
  };

  togglePlayedGames = () => {
    this.setState((state) => ({
      showPlayedGames: !state.showPlayedGames,
    }));
  };

  render() {
    const { users } = this.props;
    const { showPlayedGames } = this.state;
    return (
      <div>
        <h1>UserList</h1>
        {users && users.length > 0 ? (
          <div>
            <button className="smallButton" onClick={this.togglePlayedGames}>
              {showPlayedGames ? "Hide " : "Show "}
              the Number of Game Played
            </button>
          </div>
        ) : (
          ""
        )}
        <ol>
          {users.map((user) => (
            <UserComponent
              key={user.userName}
              user={user}
              showPlayedGames={showPlayedGames}
            />
          ))}
        </ol>
      </div>
    );
  }
}
