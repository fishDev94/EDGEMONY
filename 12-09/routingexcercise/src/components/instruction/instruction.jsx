import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

export default function Instruction() {
  const data = useOutletContext() ?? [];

  return (
    <div className={styles.Instruction}>
      <h2>Instruction</h2>
      <div className={styles.maincontent}>
        <p className={styles.text}>{data.instruction}</p>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={data.name}
        />
      </div>
    </div>
  );
}
