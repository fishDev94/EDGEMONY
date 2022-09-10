import styles from "./index.module.scss";
import { BASE_URL_IMG } from "../../constants";
import { useRef, memo } from "react";

export default memo(function WrapperCard({ data, handleOnClickCard, type }) {
  const { id, title, backdrop_path, placeholder } = data;
  const wrapperCard = useRef(null);

  const handleOnMouseHover = (e) => {
    if (e.target.tagName === "P" || e.target.tagName === "IMG") {
      wrapperCard.current.classList.add(styles.hover);
    }
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
      <div className={styles.inside_container}>
        <p id={id}>{title}</p>
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
    </div>
  );
});
