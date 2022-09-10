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
  } = props;

  useEffect(() => {
    navBarPage.current.childNodes.forEach(
      (node) => (node.style = "border: none")
    );

    navBarPage.current.childNodes[3].style =
      "border-bottom: 4px solid #fffffff5; border-top: 4px solid #ffffff00;";
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
