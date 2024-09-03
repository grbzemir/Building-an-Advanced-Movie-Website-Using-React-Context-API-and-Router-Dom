import React from 'react'
import PropTypes from 'prop-types';

const ResultCart = ({ movie }) => {
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                    <p className="release-date">
                        IMDB: <b>{movie.vote_average}</b>
                    </p>
                </div>

                <div className="controls">
                    <button className="btn">
                        Add To WatchList
                    </button>
                </div>
            </div>
        </div>
    )
}

ResultCart.propTypes = {
    movie: PropTypes.object.isRequired
};

export default ResultCart;
