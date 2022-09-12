import styles from "./index.module.scss";

export default function Catalog() {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
    "https://picsum.photos/300/200?random=4",
    "https://picsum.photos/300/200?random=5",
    "https://picsum.photos/300/200?random=6",
    "https://picsum.photos/300/200?random=7",
    "https://picsum.photos/300/200?random=8",
  ];

  return (
    <div className={styles.Catalog}>
      <h2>Catalog</h2>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <img src={image} alt={image} key={index} />
        ))}
      </div>
    </div>
  );
}
