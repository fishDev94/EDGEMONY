import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/api";
import loader from "../../assets/loader.svg";
import CardList from "../CardList/CardList";

export default function MainSection(props) {
  const [movieLists, setMovieLists] = useState({
    topRated: [{ placeholder: loader }],
    popular: [{ placeholder: loader }],
    upcoming: [{ placeholder: loader }],
  });

  useEffect(() => {
    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  return (
    <div className={styles.MainSection}>
      <CardList
        setModalVisibility={props.setModalVisibility}
        setMovieID={props.setMovieID}
        title="Top Rated"
        data={movieLists.topRated}
      />
      <CardList
        setModalVisibility={props.setModalVisibility}
        setMovieID={props.setMovieID}
        title="Upcoming Movies"
        data={movieLists.upcoming}
      />
    </div>
  );
}
