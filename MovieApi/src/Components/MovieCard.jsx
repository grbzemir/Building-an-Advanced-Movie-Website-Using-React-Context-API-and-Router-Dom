
import React from "react";
import PropTypes from "prop-types";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay"></div>
            {movie.vote_average && (
                <div className="vote-average">{movie.vote_average}</div>
            )}
            {movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={`${movie.poster_path}`}
                />
            ) : (
                <div className="filler-poster"></div>
                // <MovieCard movie={movie} type={type} />
            )}

            <MovieControls movie={movie} type={type} />
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};


export default MovieCard;