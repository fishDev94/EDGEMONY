import styles from "./index.module.scss";
import { memo } from "react";
import { useLoaderData, useLocation, useParams, Link } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import MealsList from "../../components/meals-list";

export default memo(function Catalog() {
  const { categoryName } = useParams();
  const data = useLoaderData();
  const { state } = useLocation();

  console.log(state);

  return (
    <div className={styles.Catalog}>
      <div className={styles.btncontainer}>
        <Link to="..">
          <button className={styles.button}>
            <BiLeftArrow />
          </button>
        </Link>
      </div>
      <h2>{categoryName}</h2>
      {data && <MealsList data={data} />}
    </div>
  );
});
