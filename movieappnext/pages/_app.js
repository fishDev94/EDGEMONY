import "../styles/globals.css";
import { useState, useRef } from "react";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [movieID, setMovieID] = useState("");
  const [genreID, setGenreID] = useState("");
  const [typeofGenres, setTypeOfGenres] = useState("movie");
  const [pageNumber, setPageNumber] = useState(1);

  const handleOnClickCard = (e) => {
    setMovieID(e.target.id);
    setModalVisibility(true);
  };

  const navBarPage = useRef(null);
  return (
    <NavBar
      setModalVisibility={setModalVisibility}
      isModalVisibile={isModalVisibile}
      setMovieID={setMovieID}
      movieID={movieID}
      setGenreID={setGenreID}
      setTypeOfGenres={setTypeOfGenres}
      typeofGenres={typeofGenres}
      navBarPage={navBarPage}
    >
      <Component
        {...pageProps}
        movieID={movieID}
        isModalVisibile={isModalVisibile}
        setMovieID={setMovieID}
        setModalVisibility={setModalVisibility}
        genreID={genreID}
        typeofGenres={typeofGenres}
        pageNumber={pageNumber}
        navBarPage={navBarPage}
        handleOnClickCard={handleOnClickCard}
      />
    </NavBar>
  );
}

export default MyApp;
