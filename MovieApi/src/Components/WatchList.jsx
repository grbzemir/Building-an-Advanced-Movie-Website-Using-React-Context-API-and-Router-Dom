import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const WatchList = () => {
    const { watchList } = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">İzlenecek Filmler</h1>

                    <div className="count-pill">
                        {watchList.length} {watchList.length < 2 ? "Movie" : "Movies"}
                    </div>
                </div>

                {watchList.length > 0 ? (
                    <div className="movie-grid">
                        {watchList.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} type="WatchList" />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">Listenizde Film Yok...</h2>
                )}
            </div>
        </div>
    );
};

export default WatchList;
