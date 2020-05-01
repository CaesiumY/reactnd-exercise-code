import React, { Component } from "react";

export default class MovieComponent extends Component {
  render() {
    console.log(this.props);
    const { movie, users, userLikeMovie } = this.props;
    return (
      <li>
        <h2>{movie.name}</h2>
        <p>Liked By:</p>
        <ul>
          {userLikeMovie ? (
            userLikeMovie.map((id) => <li key={id}>{users[id].name}</li>)
          ) : (
            <p>None of the current users liked this movie</p>
          )}
        </ul>
      </li>
    );
  }
}
