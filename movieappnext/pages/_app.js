import "../styles/globals.css";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [movieID, setMovieID] = useState("");
  const [genreID, setGenreID] = useState("");
  const [typeofGenres, setTypeOfGenres] = useState("movie");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <NavBar
      setModalVisibility={setModalVisibility}
      setMovieID={setMovieID}
      setGenreID={setGenreID}
      setTypeOfGenres={setTypeOfGenres}
      typeofGenres={typeofGenres}
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
      />
    </NavBar>
  );
}

export default MyApp;
