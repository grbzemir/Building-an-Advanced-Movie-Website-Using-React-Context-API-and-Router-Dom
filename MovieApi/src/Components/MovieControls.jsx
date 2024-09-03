import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PropTypes from "prop-types";

const MovieControls = ({ movie, type }) => {
    const {
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched,
    } = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === "watchList" && (
                <>
                    <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>
                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatchList(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => moveToWatchList(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                    <button
                        className="ctrl-btn"
                        onClick={() => removeMovieFromWatched(movie.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};

MovieControls.propTypes = {
    movie: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
};

export default MovieControls;