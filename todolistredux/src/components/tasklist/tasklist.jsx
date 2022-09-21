import TaskCard from "../taskcard/taskcard";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";

export default function TaskList() {
  const state = useSelector((state) => state);

  return (
    <div className={styles.TaskList}>
      {state.taskList.map((item, index) => (
        <TaskCard id={index} text={item} key={index} />
      ))}
    </div>
  );
}
