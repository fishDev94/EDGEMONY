import styles from "./index.module.scss";

export default function MealCardSK() {
  return (
    <div className={styles.MealCard}>
      <div className={styles.thumbnail} />
      <h3 style={{ opacity: 0.4 }}>Loading ...</h3>
    </div>
  );
}
