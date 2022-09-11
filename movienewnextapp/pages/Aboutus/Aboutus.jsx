import styles from "./index.module.scss";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";

export default function Aboutus(props) {
  const {
    // isModalVisibile,
    // movieID,
    // setMovieID,
    // setModalVisibility,
    // genreID,
    // typeofGenres,
    // pageNumber,
    // navBarPage,
    setLinkActive,
  } = props;

  useEffect(() => {
    setLinkActive("Aboutus");
  }, []);

  return (
    <div className={styles.aboutus}>
      <div className={styles.maincontent}>
        <div className={styles.text_container}>
          <h2>HELLO THERE!</h2>
          <h3>It's just an excercise</h3>
          <p>
            if you are curious,{" "}
            <Link href="https://github.com/marco94gug/EDGEMONY/tree/main/movienewnextapp">
              <a>HERE</a>
            </Link>{" "}
            you can find the complete code of this App.
          </p>
          <p className={styles.vercel}>deployed with vercel.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
