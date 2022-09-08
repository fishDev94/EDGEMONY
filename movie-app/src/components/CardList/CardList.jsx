import WrapperCard from "../WrapperCard/WrapperCard";
import styles from "./index.module.scss";

export default function CardList({ data, title }) {
  return (
    <div className={styles.CardList_section}>
      <h3>{title}</h3>
      <div className={styles.CardList}>
        {data.map((item, index) => (
          <WrapperCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
