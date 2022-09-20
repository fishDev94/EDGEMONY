import styles from "./index.module.scss";
import { useContext } from "react";
import { counterData } from "../..";

export default function Counter() {
  const { state, dispatch } = useContext(counterData);

  const handleOnIncrement = () => {
    dispatch({ type: "INCRESE" });
  };

  const handleOnDecrement = () => {
    dispatch({ type: "DECRESE" });
  };

  return (
    <div className={styles.Counter}>
      <button onClick={handleOnDecrement} className={styles.decrese}>
        -1
      </button>
      <button onClick={handleOnIncrement} className={styles.increse}>
        +1
      </button>
    </div>
  );
}
