import "../styles/globals.css";
import { useState, useRef, createContext, useReducer } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { initialState } from "../constants";

export const modalVisibility = createContext();
export const reducerData = createContext(initialState);

function MyApp({ Component, pageProps }) {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [whichLinkActive, setLinkActive] = useState("");
  const [movieID, setMovieID] = useState("");
  const [genreID, setGenreID] = useState("");
  const [typeofGenres, setTypeOfGenres] = useState("movie");
  const [pageNumber, setPageNumber] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [category, setCategory] = useState("movie");

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_MOVIEID":
        return { ...state, movieID: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const handleOnClickCard = (e) => {
    // setMovieID(e.target.id);
    dispatch({ type: "SET_MOVIEID", payload: e.target.id });
    console.log(e.target.id);
    setModalVisibility(true);
  };

  const navBarPage = useRef(null);
  const navBarRef = useRef(null);

  return (
    <>
      <modalVisibility.Provider value={{ isModalVisibile, setModalVisibility }}>
        <reducerData.Provider value={{ state, dispatch }}>
          <NavBar
            setMovieID={setMovieID}
            movieID={state.movieID}
            setGenreID={setGenreID}
            setTypeOfGenres={setTypeOfGenres}
            typeofGenres={typeofGenres}
            navBarPage={navBarPage}
            setMovieList={setMovieList}
            navBarRef={navBarRef}
            setLinkActive={setLinkActive}
            whichLinkActive={whichLinkActive}
            setCategory={setCategory}
            category={category}
          ></NavBar>
          <Component
            {...pageProps}
            movieID={movieID}
            setMovieID={setMovieID}
            genreID={genreID}
            typeofGenres={typeofGenres}
            pageNumber={pageNumber}
            navBarPage={navBarPage}
            handleOnClickCard={handleOnClickCard}
            setPageNumber={setPageNumber}
            setMovieList={setMovieList}
            movieList={movieList}
            navBarRef={navBarRef}
            setGenreID={setGenreID}
            setLinkActive={setLinkActive}
            setCategory={setCategory}
            category={category}
          />
          <Footer />
        </reducerData.Provider>
      </modalVisibility.Provider>
    </>
  );
}

export default MyApp;
