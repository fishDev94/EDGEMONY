import styles from "./index.module.scss";
import { Link } from "react-router-dom";

export default function CategoryCard({ data }) {
  const { strCategory, strCategoryThumb } = data;

  return (
    <div className={styles.CategoryCard}>
      <h2 className={styles.title}>{strCategory}</h2>
      <img
        className={styles.thumbnail}
        src={strCategoryThumb}
        alt={strCategory}
      />
      <Link
        to={`/catalog/${strCategory}`}
        title={`Apri il catalogo ${strCategory}`}
        className={styles.link}
        state={{ strCategory }}
      >
        {strCategory}
      </Link>
    </div>
  );
}
