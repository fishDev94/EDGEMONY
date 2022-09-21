import Counter from "../Counter";
import styles from "./index.module.scss";
// import { counterData } from "../..";
// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function MainSection() {
  // const { state, dispatch } = useContext(counterData);

  const [inputValue, setInputValue] = useState("");

  const store = useSelector((state) => state);
  const { count, user } = store;

  const dispatcher = useDispatch();

  const handleOnChange = (e) => {
    // dispatch({ type: "SET_USERNAME", payload: e.target.value });
    // dispatcher({ type: "SET_USERNAME", payload: e.target.value });
    setInputValue(e.target.value);
  };

  const submitName = () => {
    dispatcher({ type: "SET_USERNAME", payload: inputValue });
  };

  return (
    <div className={styles.MainSection}>
      <h1>MainSection</h1>
      <h4>Username: {user.userName}</h4>
      <h3>
        Counter Value:{" "}
        <span
          style={
            count.value > 0
              ? { color: "green" }
              : count.value === 0
              ? { color: "#7393B3" }
              : { color: "red" }
          }
        >
          {count.value}
        </span>
      </h3>
      <input
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
        type="text"
        placeholder="insert your name"
      ></input>
      <button className={styles.submit} onClick={submitName}>
        Set Name
      </button>
      <Counter />
    </div>
  );
}
