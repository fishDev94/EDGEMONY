import styles from "./index.module.scss";
// import { useContext } from "react";
// import { counterData } from "../..";
import { useDispatch } from "react-redux";
import { memo } from "react";

export default memo(function Counter() {
  // const { dispatch } = useContext(counterData);

  const dispatcher = useDispatch();

  // console.log(count);

  const handleOnIncrement = () => {
    // dispatch({ type: "INCRESE" });
    dispatcher({ type: "INCREMENT", payload: 1 });
  };

  const handleOnDecrement = () => {
    // dispatch({ type: "DECRESE" });
    dispatcher({ type: "DECREMENT", payload: 1 });
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
});
