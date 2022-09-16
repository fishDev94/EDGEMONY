import { lazy, Suspense } from "react";
import { Await } from "react-router-dom";
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
        <Suspense key={meal.idMeal} fallback={<MealCardSK />}>
          <Await resolve={meal} errorElement={<div>Error</div>}>
            <MealCard data={meal} key={meal.idMeal} />
          </Await>
        </Suspense>
      ))}
    </div>
  );
}
