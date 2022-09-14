import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

export default function Ingredients() {
  const data = useOutletContext();

  return (
    <div className={styles.Ingredients}>
      <ul>
        {data?.ingredients?.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
