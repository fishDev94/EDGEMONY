import styles from "./index.module.scss";
import { memo, Suspense } from "react";
import { useParams, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { background } from "../../constants/constants";

export default memo(function Recipe() {
  const params = useParams();
  const { recipeName, searchName } = params;

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
    const initialRecipe = data?.meals?.at(0);

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

  const data = useLoaderData();

  return (
    <div className={styles.Recipe}>
      {data?.meals ? (
        <>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${background})` }}
          />
          <h2>{recipeName ?? searchName}</h2>
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
                <Outlet context={formatRecipe(data)} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.notfound}>
            <h1>Meal not found...</h1>
          </div>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${background})` }}
          />
        </>
      )}
    </div>
  );
});
