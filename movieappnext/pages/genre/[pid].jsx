import styles from "./index.module.scss";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { GET } from "../../utils/api";
import WrapperCard from "../../components/WrapperCard/WrapperCard";

export default function MovieList(props) {
  const cardContainer = useRef(null);
  const [dataObj, setDataObj] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  const {
    genreID,
    typeofGenres,
    pageNumber,
    navBarPage,
    handleOnClickCard,
    setPageNumber,
    movieList,
    setMovieList,
  } = props;

  useEffect(() => {
    GET(
      "discover",
      `${typeofGenres}`,
      `&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pageNumber}&with_genres=${genreID}&with_watch_monetization_types=flatrate`
    ).then((data) => {
      setMovieList((prev) => [...prev, ...data.results]);
      setDataObj(data);
    });
  }, [genreID, pageNumber]);

  useEffect(() => {
    navBarPage.current.firstChild.style = "border: none";

    const scrollCondition = () => {
      const bottom = document.body.scrollHeight / 2;

      if (window.scrollY > bottom - 200) {
        setPageNumber((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", scrollCondition);
  }, []);

  return (
    <div className={styles.MovieList}>
      <h2>{pid}</h2>
      <button onClick={() => console.log(dataObj)}>click</button>
      <div ref={cardContainer} className={styles.cardContainer}>
        {movieList &&
          movieList.map((item, index) => (
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
