import React, { Component } from "react";
import MovieComponent from "./MovieComponent";

export default class MovieListComponent extends Component {
  constructor(props) {
    super(props);
    const { profiles } = this.props;
    this.movieListByUsers = {};

    profiles.forEach((profile) => {
      if (this.movieListByUsers[profile.favoriteMovieID]) {
        this.movieListByUsers[profile.favoriteMovieID].push(profile.userID);
      } else {
        this.movieListByUsers[profile.favoriteMovieID] = [profile.userID];
      }
    });

    console.log("this.movieListByUsers", this.movieListByUsers);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.props.movies).map((id) => (
          <MovieComponent
            key={id}
            userLikeMovie={this.movieListByUsers[id]}
            users={this.props.users}
            movie={this.props.movies[id]}
          />
        ))}
      </ul>
    );
  }
}
