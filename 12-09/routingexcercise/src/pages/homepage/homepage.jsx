import styles from "./index.module.scss";
import { background } from "../../constants/constants";
// import { useFetch } from "../../utils/api/useFetch";
// import { ENDPOINT } from "../../utils/api/endpoints";
import CategoryList from "../../components/category-list/category-list";
import { useLoaderData } from "react-router-dom";

function Homepage() {
  const data = useLoaderData();

  if (!data?.categories?.length) {
    return "Not found";
  }

  return (
    <div className={styles.Homepage}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      />
      <h1>What Shall We Eat Today?</h1>
      {data ? (
        <CategoryList data={data?.categories} />
      ) : (
        "Errore durante il caricamento dei dati..."
      )}
    </div>
  );
}

export default Homepage;
