import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { CgSearch } from "react-icons/cg";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const Links = [
    { text: "Home", path: "/" },
    { text: "About us", path: "aboutus" },
  ];

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputValue}`);
  };

  return (
    <div className={styles.NavBar}>
      <form onSubmit={(e) => handleOnSubmit(e)} className={styles.form}>
        <CgSearch className={styles.search_icon} />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.search_input}
          type="text"
          placeholder="Search"
        />
      </form>
      <div className={styles.link_container}>
        {Links.map(({ text, path }) => (
          <NavLink
            to={path}
            key={text}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.link_active}` : styles.link
            }
            end
          >
            {text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
