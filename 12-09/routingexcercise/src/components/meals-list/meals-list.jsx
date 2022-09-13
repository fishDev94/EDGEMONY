import { MealCard } from '../meal-card/meal-card';
import styles from './index.module.scss';
import {background} from "../../constants/constants";

export default function MealsList ({data}) {

    return (
        <div className={styles.MealsList}>
            <div className={styles.background} style={{ backgroundImage: `url(${background})`}}/>
            {data?.meals?.map(meal => <MealCard data={meal} key={meal.idMeal}/>)}
        </div>
    )
}