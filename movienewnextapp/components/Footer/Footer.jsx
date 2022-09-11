import styles from "./index.module.scss";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <p>Made By Marco Guglielmino</p>
      <div className={styles.icons_container}>
        <Link href="https://github.com/marco94gug">
          <a>
            <AiFillGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/marco-guglielmino/">
          <a>
            <AiFillLinkedin />
          </a>
        </Link>
        <Link href="https://www.instagram.com/marco94gu/">
          <a>
            <AiFillInstagram />
          </a>
        </Link>
      </div>
      <p>2022</p>
    </div>
  );
}
