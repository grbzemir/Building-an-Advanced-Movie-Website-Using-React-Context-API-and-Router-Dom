import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalState';
import MovieCard from './MovieCard';
const WatchList = () => {
    const { watchList } = useContext(GlobalContext);

    console.log(watchList);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">Benim İzlediklerim</h1>
                </div>

                {watchList.length > 0 ? (
                    <div className="movie-grid">
                        {watchList.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} /> // Her bir MovieCard'a benzersiz bir anahtar (key) ekleyin
                        ))}
                    </div>
                ) : (
                    <p>No movies in watchlist</p>
                )}
            </div>
        </div>
    );
};

export default WatchList;
