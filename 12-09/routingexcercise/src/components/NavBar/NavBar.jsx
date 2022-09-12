import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

export default function NavBar() {
  const Links = [
    { text: "Home", path: "/" },
    { text: "About", path: "aboutus" },
    { text: "Catalog", path: "catalog" },
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

      {/* <NavLink
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
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.link_active}` : styles.link
        }
        to="catalog"
      >
        Catalog
      </NavLink> */}
    </div>
  );
}
