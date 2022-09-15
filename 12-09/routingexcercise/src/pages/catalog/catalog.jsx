import styles from "./index.module.scss";
import { useLoaderData, useParams } from "react-router-dom";

import MealsList from "../../components/meals-list";

export default function Catalog() {
  const { categoryName } = useParams();
  const data = useLoaderData();

  return (
    <div className={styles.Catalog}>
      <h2>{categoryName}</h2>
      {data && <MealsList data={data} />}
    </div>
  );
}
