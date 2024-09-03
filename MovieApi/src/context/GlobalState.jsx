import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";


export const GlobalContext = createContext();

const initialState = {
    watchList: localStorage.getItem("watchList")
        ? JSON.parse(localStorage.getItem("watchList"))
        : [],
    watched: localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : [],
};


export const GlobalProvider = ({ children }) => {
    // Add prop validation for 'children'
    GlobalProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state.watchList, state.watched]); // Bağımlılık dizisini güncelledik

    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const removeMovieFromWatchList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
    };

    const addMovieToWatched = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
    };

    const moveToWatchList = (movie) => {
        dispatch({ type: "MOVE_TO_WATCHED", payload: movie });
    };

    const removeMovieFromWatched = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
    };

    return (
        <GlobalContext.Provider
            value={{
                watchList: state.watchList, // Düzeltme yapıldı
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchList,
                addMovieToWatched,
                moveToWatchList,
                removeMovieFromWatched,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
