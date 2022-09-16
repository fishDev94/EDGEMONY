import styles from "./index.module.scss";
import { memo } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

import MealsList from "../../components/meals-list";

export default memo(function Catalog() {
  const { categoryName } = useParams();
  const data = useLoaderData();
  const { state } = useLocation();

  console.log(state);

  return (
    <div className={styles.Catalog}>
      <h2>{categoryName}</h2>
      {data && <MealsList data={data} />}
    </div>
  );
});
