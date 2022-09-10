import styles from "./index.module.scss";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useRouter } from "next/router";
import { GET } from "../../utils/api";
import WrapperCard from "../../components/WrapperCard/WrapperCard";

export default function MovieList(props) {
  const cardContainer = useRef(null);

  const [dataObj, setDataObj] = useState({});

  const router = useRouter();
  const { pid } = router.query;

  const {
    typeofGenres,
    pageNumber,
    navBarPage,
    handleOnClickCard,
    setPageNumber,
    movieList,
    setMovieList,
    navBarRef,
    setGenreID,
    genreID,
    setLinkActive,
  } = props;

  const handleOnDocumentBottom = useCallback(() => {
    setPageNumber((prev) => prev + 1);
  }, []);

  useBottomScrollListener(handleOnDocumentBottom);

  useEffect(() => {
    pid &&
      GET(
        "discover",
        `${typeofGenres}`,
        `&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pageNumber}&with_genres=${
          pid.split("&=")[0]
        }&with_watch_monetization_types=flatrate`
      ).then((data) => {
        setMovieList(data.results);
        setDataObj(data);
      });
  }, [pid]);

  useEffect(() => {
    pid &&
      GET(
        "discover",
        `${typeofGenres}`,
        `&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pageNumber}&with_genres=${genreID}&with_watch_monetization_types=flatrate`
      ).then((data) => {
        setMovieList((prev) => [...prev, ...data.results]);
        setDataObj(data);
      });
  }, [genreID, pageNumber]);

  // useEffect(() => {
  //   navBarPage.current.firstChild.style = "border: none";

  //   const scrollCondition = () => {
  //     const bottom = document.body.scrollHeigh;

  //     if (cardContainer.current) {
  //       const { scrollTop, scrollHeight, clientHeight } =
  //         cardContainer?.current;
  //       if (scrollTop + clientHeight === scrollHeight) {
  //         console.log("reached bottom");
  //         console.log(window.scrollY + navBarRef.current.offsetHeight * 2);
  //         console.log(clientHeight);
  //       }
  //     }

  //     //   if (window.scrollY > bottom - 50) {
  //     //     setPageNumber((prev) => prev + 1);
  //     //   }
  //     // };
  //   };
  //   window.addEventListener("scroll", scrollCondition);
  // }, []);

  return (
    <div className={styles.MovieList}>
      <h2>{pid?.split("&=")[1]}</h2>
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
