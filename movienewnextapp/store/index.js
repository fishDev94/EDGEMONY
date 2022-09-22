import { combineReducers, createStore } from "redux";

const initialState = {
  movieSetup: {
    movieID: "",
    genreID: "",
    typeofGenres: "movie",
    category: "movie",
    movieList: [],
  },

  modalSetup: {
    whichLinkActive: "",
    isModalVisibile: false,
  },
};

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE_ID":
      return { ...state, movieID: action.payload };
    case "SET_GENRE_ID":
      return { ...state, genreID: action.payload };
    case "SET_TYPEOF_GENRES":
      return { ...state, typeofGenres: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_MOVIE_LIST":
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_LINK_ACTIVE":
      return { ...state, whichLinkActive: action.payload };
    case "SET_MODAL_ACTIVE":
      return { ...state, isModalVisibile: true };
    case "SET_MODAL_INACTIVE":
      return { ...state, isModalVisibile: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movieSetup: movieReducer,
  modalSetup: modalReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
