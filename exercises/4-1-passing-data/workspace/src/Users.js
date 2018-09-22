import React, { Component } from 'react';


class User extends Component {
    render() {
        return (
            <li key={this.props.user.id}>
                {`${this.props.user.name}'s favorite movie is ${this.props.movie.name}.`}
            </li>
        )
    }
}


class UserList extends Component {
    render() {
        const { profiles, users, movies } = this.props;
        return (
            <ol>
                {profiles.map(
                    (profile) => (
                        <User key={profile.id}
                            user={users[Number(profile.userID)]}
                            movie={movies[Number(profile.favoriteMovieID)]} />
                    )
                )}
            </ol>
        )
    }
}

export default UserList;
