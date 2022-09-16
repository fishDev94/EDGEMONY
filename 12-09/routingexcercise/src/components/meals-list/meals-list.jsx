import { lazy, Suspense } from "react";
// import { MealCard } from "../meal-card/meal-card";
import styles from "./index.module.scss";
import { background } from "../../constants/constants";
import MealCardSK from "../meal-card-sk";

export default function MealsList({ data }) {
  const MealCard = lazy(() => import("../meal-card/meal-card"));

  return (
    <div className={styles.MealsList}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      />
      {data?.meals?.map((meal) => (
        <Suspense fallback={<MealCardSK />}>
          <MealCard data={meal} key={meal.idMeal} />
        </Suspense>
      ))}
    </div>
  );
}
