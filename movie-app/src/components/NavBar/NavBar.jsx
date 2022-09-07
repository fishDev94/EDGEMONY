import styles from "./index.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useRef, useEffect, memo } from "react";
import { GET } from "../../utils/api";
import Logo from "./Logo";

export default memo(function NavBar() {
  const searchInput = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState({ results: [] });
  const [isSerchActive, setSearchActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(true);
    searchInput.current.focus();
  };

  const browseClick = () => {
    if (menuIsActive) {
      setMenuIsActive(false);
    } else {
      setMenuIsActive(true);
    }
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(results);
  };

  const onInputSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchActive(true);
  };

  const handleOnCloseClick = () => {
    setIsActive(false);
    setSearchActive(false);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleEventListener = (e) => {
      if (
        e.target.id !== "main_search" &&
        e.target.tagName !== "path" &&
        e.target.tagName !== "svg"
      ) {
        setIsActive(false);
        setSearchActive(false);
      }
    };

    window.addEventListener("click", (e) => handleEventListener(e));
  }, []);

  useEffect(() => {
    searchQuery.length > 1 &&
      GET(
        "search",
        "movie",
        `&query=${searchQuery}&page=${pageNumber}&include_adult=false`
      ).then((data) => {
        setResults(data);
      });
  }, [searchQuery, pageNumber]);

  useEffect(() => {
    searchQuery.length === 0 && setSearchActive(false);
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [searchQuery]);

  return (
    <div className={styles.NavBar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h3
        onClick={browseClick}
        className={
          menuIsActive
            ? styles.browse_btn + " " + styles.active
            : styles.browse_btn
        }
      >
        Browse <IoMdArrowDropdown className={styles.arrow} />
      </h3>
      <ul
        className={
          menuIsActive
            ? styles.NavBar__link + " " + styles.active
            : styles.NavBar__link
        }
      >
        <li>Home</li>
        <li>
          Category <IoMdArrowDropdown className={styles.arrow} />
        </li>
        <li>My Stuff</li>
        <li>About us</li>
      </ul>
      <form
        onSubmit={onSearchSubmit}
        className={
          isActive
            ? styles.NavBar__searchbar_container + " " + styles.active
            : styles.NavBar__searchbar_container
        }
      >
        <VscChromeClose
          onClick={handleOnCloseClick}
          className={
            isActive ? styles.close_bar + " " + styles.active : styles.close_bar
          }
        />
        <AiOutlineSearch
          onClick={handleOnClick}
          className={`${styles.search_icon} ${isActive ? styles.active : ""}`}
        />
        <input
          ref={searchInput}
          type="text"
          id="main_search"
          onChange={onInputSearchChange}
          value={searchQuery}
          className={`${styles.NavBar__searchbar} ${
            isActive ? styles.active : ""
          }`}
          placeholder="Search"
        />
        <div
          className={
            isSerchActive
              ? styles.results_container + " " + styles.active
              : styles.results_container
          }
        >
          <ul>
            {results.results.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
});
