import styles from "./index.module.scss";
import { Link, useParams } from "react-router-dom";

export const MealCard = ({ data }) => {
  const { strMeal, strMealThumb, idMeal } = data;
  const { categoryName } = useParams();
  return (
    <div className={styles.MealCard}>
      <img src={strMealThumb} alt={strMeal} className={styles.thumbnail} />
      <h3>{strMeal}</h3>
      <Link
        to={`/catalog/${categoryName}/${strMeal}/${idMeal}`}
        className={styles.link}
        title={`Visit recpite of ${strMeal}`}
      >
        {strMeal}
      </Link>
    </div>
  );
};
