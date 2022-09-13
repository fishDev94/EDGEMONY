import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.link_active}` : styles.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.link_active}` : styles.link
        }
        to="aboutus"
      >
        About Us
      </NavLink>
    </div>
  );
}
