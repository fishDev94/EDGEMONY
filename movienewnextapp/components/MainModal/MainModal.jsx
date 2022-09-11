import styles from "./index.module.scss";
import { useEffect, useState, memo } from "react";
import { GET } from "../../utils/api";
import { BASE_URL_IMG } from "../../constants";

export default memo(function MainModal({
  movieID,
  setModalVisibility,
  category,
}) {
  const [open, setOpen] = useState("");
  const [movieData, setMovieData] = useState({});

  const handleOnClickClose = () => {
    setModalVisibility(false);
  };

  const handleOnBackgroundClick = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    GET(category, movieID).then((data) => {
      setMovieData(data);
      console.log(category);
    });
  }, [movieID]);

  useEffect(() => {
    setOpen("open");
  }, []);

  return (
    <div className={styles.MainModal + " " + styles[open]}>
      <div
        onClick={handleOnBackgroundClick}
        className={styles.backdrop_overlay}
      />
      <div className={styles.MainModal__container}>
        <div className={styles.img_container}>
          <img src={BASE_URL_IMG + movieData.poster_path} alt="poster" />
        </div>
        <div
          className={styles.MainModal__container_background}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
          }}
        />
        <div className={styles.MainModal__container_background_overlay} />
        <div className={styles.MainModal__container_background_halfoverlay} />
        <div className={styles.MainModal__info}>
          <div className={styles.MainModal__info_container_title}>
            <h2 className={styles.MainModal__info_title}>{movieData.title}</h2>
            <p className={styles.MainModal__tagline}>{movieData.tagline}</p>
          </div>
          <ul className={styles.MainModal__info_genres}>
            {movieData.genres &&
              movieData.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
          </ul>
          <p className={styles.MainModal__description}>{movieData.overview}</p>
          <p className={styles.release}>
            {movieData.release_date
              ? movieData.release_date
              : movieData.first_air_date}
          </p>
        </div>
        <div onClick={handleOnClickClose} className={styles.close}>
          X
        </div>
      </div>
    </div>
  );
});
