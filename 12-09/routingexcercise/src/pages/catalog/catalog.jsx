import styles from "./index.module.scss";
import { useParams} from 'react-router-dom';
import { useFetch } from "../../utils/api/useFetch";
import { ENDPOINT } from "../../utils/api/endpoints";

import MealsList from "../../components/meals-list";

export default function Catalog() {
  const {categoryName} = useParams();

  const { loading, data }= useFetch(`${ENDPOINT.FILTER}?c=${categoryName}`)

  return (
    <div className={styles.Catalog}>
      <h2>{categoryName}</h2>
    {loading ? (<h2>Loading...</h2>) : <MealsList data={data} />}
    </div>
  );
}
