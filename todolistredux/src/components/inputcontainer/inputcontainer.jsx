import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";

export default function InputContainer() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: inputValue,
    });
    setInputValue("");
  };

  return (
    <div className={styles.InputContainer}>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className={styles.input_text}
          type="text"
          placeholder="Enter your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type="submit" className={styles.submit_btn}>
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
