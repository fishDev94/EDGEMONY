import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

export default function Player() {
  const data = useOutletContext();
  const youtubeURL = data?.video;
  const YOUTUBEID = youtubeURL?.split("?v=")[1];

  return (
    <div className={styles.Player}>
      <h2>Video:</h2>
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${YOUTUBEID}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
