import styles from "./App.module.scss";
import { background } from "../src/constants/constants";
import { useFetch } from "./utils/api/useFetch";
import { ENDPOINT } from "./utils/api/endpoints";
import CategoryList from "./components/category-list/category-list";

function App() {
  const { loading, data } = useFetch(ENDPOINT.CATEGORY);

  if (loading) {
    return "Loading...";
  }

  if (!data?.categories?.length) {
    return "Not found";
  }

  return (
    <div className={styles.App}>
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

export default App;

// const youtubeURL = "https://www.youtube.com/watch?v=6kRuxbnZsmU"

// const YOUTUBEID = youtubeURL.split("?v=")[1];

// `www.youtube.com/embed/${YOUTUBEID}`
