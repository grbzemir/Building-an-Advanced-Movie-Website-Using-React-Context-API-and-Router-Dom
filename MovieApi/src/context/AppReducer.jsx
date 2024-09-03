export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchList: [...state.watchList, action.payload], // Burada da 'watchList' kullanmalısınız
            };
        default:
            return state;
    }
};
