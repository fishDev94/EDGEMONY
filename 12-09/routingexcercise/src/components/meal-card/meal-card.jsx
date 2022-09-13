import styles from './index.module.scss';

export const MealCard = ({data}) => {

   const { strMeal, strMealThumb } = data; 

    return (
        <div className={styles.MealCard}>
            <img src={strMealThumb} alt={strMeal} className={styles.thumbnail} />
            <h3>{strMeal}</h3>
            
        </div>
    )
}