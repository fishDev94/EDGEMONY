import styles from "./index.module.scss";
import MainModal from "../../components/MainModal/MainModal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GET } from "../../utils/api";
import Link from "next/link";

export default function MovieList(props) {
  const [movieList, setMovieList] = useState({
    results: [{ title: "", poster_path: "", overview: "" }],
  });
  const router = useRouter();
  const { pid } = router.query;

  const { genreID, typeofGenres, pageNumber, navBarPage } = props;

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
      <h1 style={{ fontSize: "4rem", textTransform: "capitalize" }}>{pid}</h1>
      <Link href="/">
        <a>Back</a>
      </Link>
      <button onClick={() => console.log(movieList)}>Lista</button>
    </div>
  );
}
