import { createContext, useEffect } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";

const GlobalContext = createContext();
export default GlobalContext;

const initialState = {
    watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
    watched: [],
};

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchList", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    const addMovieToWatchList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    console.log(state);
    return (
        <GlobalContext.Provider value={{
            watchList: state.watchList,
            addMovieToWatchList,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
