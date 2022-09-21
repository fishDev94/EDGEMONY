import styles from "./index.module.scss";
import { useDispatch } from "react-redux";

export default function TaskCard({ text, id }) {
  const dispatch = useDispatch();

  const handleOnClose = (e) => {
    dispatch({ type: "DELETE_TASK", payload: e.target.id });
  };

  return (
    <div className={styles.TaskCard}>
      <p>{text}</p>
      <span
        id={id}
        onClick={(e) => handleOnClose(e)}
        className={styles.closeBtn}
      >
        x
      </span>
    </div>
  );
}
