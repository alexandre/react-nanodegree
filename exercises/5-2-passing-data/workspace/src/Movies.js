import React, { Component } from 'react';
import Movie from './Movie.js';
import mapMovieAndUsers from './utils/movies.js';


class MoviesList extends Component {
    render() {

        const { movies, profiles, users } = this.props;
        const moviesAndUsers = mapMovieAndUsers(
            Object.values(movies), profiles, Object.values(users)
        );

        return (moviesAndUsers.map(([movie, movieUsers]) =>
            <Movie key={movie.id} movie={movie} users={movieUsers} />
        ));
    }
}


export default MoviesList;
