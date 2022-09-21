import styles from "./index.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className={styles.NavBar}>
      <form
        className={styles.input_container}
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <input
          type="text"
          className={styles.Input}
          placeholder="Type your username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className={styles.submit_btn}>Login</button>
      </form>

      <h5>Username: {state.user.userName}</h5>
    </div>
  );
}
