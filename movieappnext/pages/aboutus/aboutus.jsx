import styles from "./index.module.scss";
import { useEffect } from "react";

export default function aboutus(props) {
  const {
    isModalVisibile,
    movieID,
    setMovieID,
    setModalVisibility,
    genreID,
    typeofGenres,
    pageNumber,
    navBarPage,
    setLinkActive,
  } = props;

  useEffect(() => {
    setLinkActive("Aboutus");
  }, []);

  return (
    <div className={styles.aboutus}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, eos
        dolorem laborum consequuntur delectus temporibus?
      </p>
    </div>
  );
}
