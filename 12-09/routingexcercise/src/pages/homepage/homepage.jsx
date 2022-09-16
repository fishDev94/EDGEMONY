import styles from "./index.module.scss";
import { background } from "../../constants/constants";
// import { useFetch } from "../../utils/api/useFetch";
// import { ENDPOINT } from "../../utils/api/endpoints";
import CategoryList from "../../components/category-list/category-list";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

function Homepage() {
  const data = useLoaderData();

  const [pagePath, setPagePath] = useSearchParams({ page: 1 });
  const page = pagePath?.get("page") ?? 1;
  const perPage = 4;
  const totalPages = Math.ceil(data?.categories?.length / perPage);
  const catPaginated = useMemo(() => {
    return data?.categories?.slice((page - 1) * perPage, page * perPage);
  }, [data?.categories, page]);

  const handleOnClick = (variation) => {
    setPagePath((prev) => {
      return { page: Number(prev.get("page")) + variation };
    });
  };

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
        <CategoryList data={catPaginated} />
      ) : (
        "Errore durante il caricamento dei dati..."
      )}
      <div className={styles.button_container}>
        <button
          onClick={handleOnClick.bind(this, -1)}
          className={styles.button}
          disabled={Number(pagePath?.get("page")) === 1}
        >
          Previous
        </button>
        <p style={{ fontWeight: "bold" }}>
          {page}/{totalPages}
        </p>
        <button
          onClick={handleOnClick.bind(this, 1)}
          className={styles.button}
          disabled={Number(pagePath?.get("page")) === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Homepage;
