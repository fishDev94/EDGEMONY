import styles from "./index.module.scss";
import { BASE_URL_IMG } from "../../constants";

export default function WrapperCard({ data }) {
  const { id, title, backdrop_path, placeholder } = data;

  const handleOnClickCard = () => {
    console.log(id);
  };

  return (
    <div onClick={handleOnClickCard} className={styles.WrapperCard}>
      <p>{title}</p>
      {backdrop_path ? (
        <img
          className={styles.background}
          src={BASE_URL_IMG + backdrop_path}
          alt="background"
        />
      ) : (
        <div className={styles.placeholder_container}>
          <img
            className={styles.placeholder}
            src={placeholder}
            alt="placeholder"
          />
        </div>
      )}
    </div>
  );
}
