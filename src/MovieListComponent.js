import React, { Component } from "react";

export default class MovieListComponent extends Component {
  render() {
    const { profiles, movies, users } = this.props;
    return (
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <p>
              {users[profile.userID].name}'s favorite movie is{" "}
              {movies[profile.favoriteMovieID].name}
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
