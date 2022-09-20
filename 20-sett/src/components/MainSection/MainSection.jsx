import Counter from "../Counter";
import styles from "./index.module.scss";
import { counterData } from "../..";
import { useContext } from "react";

export default function MainSection() {
  const { state, dispatch } = useContext(counterData);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  };

  return (
    <div className={styles.MainSection}>
      <h1>MainSection</h1>
      <h4>Username: {state.userName}</h4>
      <h3>
        Counter Value:{" "}
        <span
          style={
            state.count > 0
              ? { color: "green" }
              : state.count === 0
              ? { color: "#7393B3" }
              : { color: "red" }
          }
        >
          {state.count}
        </span>
      </h3>
      <input
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="insert your name"
      ></input>
      <Counter />
    </div>
  );
}
