import styles from "./index.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <p>Made By Marco Guglielmino</p>
      <div className={styles.icons_container}>
        <a
          href="https://github.com/marco94gug"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/marco-guglielmino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://www.instagram.com/marco94gu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />
        </a>
      </div>
      <p>2022</p>
    </div>
  );
}
