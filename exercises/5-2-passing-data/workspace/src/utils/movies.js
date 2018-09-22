function getUser(profile, users) {

    if(users.length === 0) {
        return null;
    }
    if (users[0].id === Number(profile.userID)) {
        return users[0];
    }
    return getUser(profile, users.slice(1));
};


function getProfiles(movie, profiles) {
    return profiles.filter((profile) => Number(profile.favoriteMovieID) === movie.id);

};


function mapMoviesAndUsers(movies, profiles, users) {
    return movies.map(
        (movie) => [
            movie,
            getProfiles(movie, profiles).map(profile => getUser(profile, users))
            .filter((user) => user)
        ]
    );
};


export default mapMoviesAndUsers;
