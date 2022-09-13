import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function NavBar() {
  const Links = [
    { text: "Home", path: "/" },
    { text: "About us", path: "aboutus" },
  ];

  return (
    <div className={styles.NavBar}>
      {Links.map(({ text, path }) => (
        <NavLink
          to={path}
          key={text}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.link_active}` : styles.link
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}
