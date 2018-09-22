import React, { Component } from 'react';


class MovieStats extends Component {

    renderUsers() {
        return <ul>{
            this.props.users.map((user) => <li key={user.id}> {user.name}</li>)
        }</ul>;
    }

    renderNoUsers() {
        return <p>None of the current users liked this movie</p>;
    }

    render() {
        if (this.props.users.length !== 0) {
            return this.renderUsers();
        }
        else {
            return this.renderNoUsers();
        }
    }
}


class Movie extends Component {
    render() {
        const { movie, users } = this.props;
        return (
            <div>
                <h2>{movie.name}</h2>
                <p>Liked By:</p>
                <MovieStats key={movie.id} movie={movie} users={users} />
            </div>
        )
    }
}


export default Movie;
