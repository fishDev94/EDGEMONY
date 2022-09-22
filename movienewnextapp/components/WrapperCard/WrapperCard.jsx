import styles from "./index.module.scss";
import { BASE_URL_IMG } from "../../constants";
import { useRef, memo } from "react";
import { useDispatch } from "react-redux";

export default memo(function WrapperCard({ data, type }) {
  const {
    id,
    title,
    backdrop_path,
    placeholder,
    name,
    first_air_date,
    release_date,
    vote_average,
  } = data;

  const wrapperCard = useRef(null);

  const dispatch = useDispatch();

  const handleOnMouseHover = (e) => {
    if (e.target.tagName === "P" || e.target.tagName === "IMG") {
      wrapperCard.current.classList.add(styles.hover);
    }
  };

  const handleOnClickCard = (e) => {
    // setMovieID(e.target.id);
    dispatch({ type: "SET_MOVIE_ID", payload: e.target.id });
    console.log(e.target.id);
    // setModalVisibility(true);
    dispatch({ type: "SET_MODAL_ACTIVE" });
  };

  const handleOnMouseOut = () => {
    wrapperCard.current.classList.remove(styles.hover);
  };

  return (
    <div
      onMouseOver={(e) => handleOnMouseHover(e)}
      onMouseOut={handleOnMouseOut}
      ref={wrapperCard}
      onClick={(e) => handleOnClickCard(e)}
      className={`${styles.WrapperCard} ${type && styles[type]}`}
    >
      <div id={id} className={styles.clickable_area} />
      <div className={styles.inside_container}>
        <p className={styles.titlecard}>{title}</p>
        {backdrop_path ? (
          <img
            className={styles.background}
            src={BASE_URL_IMG + backdrop_path}
            alt="background"
          />
        ) : (
          <div className={styles.placeholder_container}>
            <img
              className={styles.placeholder}
              src={placeholder}
              alt="placeholder"
            />
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        <h4>{title ? title : name}</h4>
        <div className={styles.vote_average}>
          <span>
            {release_date
              ? release_date.split("-")[0]
              : first_air_date?.split("-")[0]}
          </span>
          <span className={styles.rating}>{vote_average}</span>
        </div>
      </div>
    </div>
  );
});
