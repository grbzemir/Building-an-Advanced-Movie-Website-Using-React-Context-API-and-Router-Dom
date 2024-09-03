import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";

const GlobalContext = createContext();
export default GlobalContext;

const initialState = {
    watchList: [], // 'watchList' ile tutarlı olmalı
    watched: [],
};

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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
