import styles from "./index.module.scss";
import { memo } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { ENDPOINT } from "../../utils/api/endpoints";
import { useFetch } from "../../utils/api/useFetch";

export default memo(function Recipe() {
  const { categoryName, recipeName, id } = useParams();

  const tab = [
    {
      name: "Ingredient",
      path: "/ingredients",
    },
    {
      name: "Instructions",
      path: "/instructions",
    },
    {
      name: "Video",
      path: "/video",
    },
  ];

  const formatRecipe = (data) => {
    const initialRecipe = data?.meals.at(0);

    const ingredients = [];
    if (data) {
      for (let i = 1; i < 20; i++) {
        const name = initialRecipe[`strIngredient${i}`];
        const value = initialRecipe[`strMeasure${i}`];

        if (!name?.length) {
          continue;
        }

        ingredients.push({ name, value });
      }
    }
    return {
      name: initialRecipe.strMeal,
      id: initialRecipe.idMeal,
      ingredients,
      thumbnail: initialRecipe.strMealThumb,
      instruction: initialRecipe.strInstructions,
      video: initialRecipe.strYoutube,
      tags: initialRecipe.strTags,
    };
  };

  const { loading, data } = useFetch(
    `${ENDPOINT.LOOKUP}?i=${id}`,
    formatRecipe
  );

  return (
    <div className={styles.Recipe}>
      <h2>{recipeName}</h2>
      <div className={styles.cardContainer}>
        <div className={styles.container}>
          <nav className={styles.tab}>
            {tab.map((item, i) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={`.${item.path}`}
                key={i}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <div className={styles.content}>
            <Outlet context={data} />
          </div>
        </div>
      </div>
    </div>
  );
});
