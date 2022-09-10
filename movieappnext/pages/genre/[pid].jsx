import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GET } from "../../utils/api";
import WrapperCard from "../../components/WrapperCard/WrapperCard";

export default function MovieList(props) {
  const [movieList, setMovieList] = useState({
    results: [{ title: "", poster_path: "", overview: "" }],
  });
  const router = useRouter();
  const { pid } = router.query;

  const { genreID, typeofGenres, pageNumber, navBarPage, handleOnClickCard } =
    props;

  useEffect(() => {
    GET(
      "discover",
      `${typeofGenres}`,
      `&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pageNumber}&with_genres=${genreID}&with_watch_monetization_types=flatrate`
    ).then((data) => setMovieList(data));
  }, [genreID]);

  useEffect(() => {
    navBarPage.current.firstChild.style = "border: none";
  }, []);

  return (
    <div className={styles.MovieList}>
      <h2>{pid}</h2>
      <div className={styles.cardContainer}>
        {movieList.results &&
          movieList.results.map((item, index) => (
            <WrapperCard
              data={item}
              handleOnClickCard={handleOnClickCard}
              key={index}
              type="big"
            />
          ))}
      </div>
    </div>
  );
}
