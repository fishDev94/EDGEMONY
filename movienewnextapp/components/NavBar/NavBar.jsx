import styles from "./index.module.scss";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useRef, useEffect, memo } from "react";
import { GET } from "../../utils/api";
import Logo from "./Logo";
import MainModal from "../MainModal/MainModal";
import Footer from "../Footer/Footer";

export default memo(function NavBar({
  children,
  setMovieID,
  movieID,
  setModalVisibility,
  setGenreID,
  setTypeOfGenres,
  typeofGenres,
  navBarPage,
  isModalVisibile,
  setMovieList,
  navBarRef,
  setLinkActive,
  whichLinkActive,
  setCategory,
  category,
}) {
  const categoryRef = useRef(null);
  const searchInput = useRef(null);
  const categoryList = useRef(null);
  const iconContainer = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [results, setResults] = useState({ results: [] });
  const [isSerchActive, setSearchActive] = useState(false);
  const [genreList, setGenreList] = useState([{ id: "", name: "" }]);

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

  const handleOnMouseEnter = (e) => {
    e.target.classList.add(styles.category_hover);
    categoryList.current.classList.add(styles.hover);
  };

  const handleOnMouseLeave = (e) => {
    e.target.classList.remove(styles.category_hover);
    categoryList.current.classList.remove(styles.hover);
  };

  const handleCategoryClick = () => {
    categoryList.current.classList.toggle(styles.desk_active);
    iconContainer.current.firstElementChild.classList.toggle(
      styles.desk_active
    );
  };

  const handleOnClickLink = (id) => {
    setMovieID(id);
    setModalVisibility(true);
    setCategory("movie");
    setSearchActive(false);
    setIsActive(false);
    setSearchQuery("");
  };

  const handleOnTypeOfGenreClick = (e) => {
    setTypeOfGenres(e.target.id);
    setCategory(e.target.text);
  };

  const handleOnGenreClick = (id) => {
    setGenreID(id);
    setMovieList([]);
    setLinkActive("");
    setMenuIsActive(false);
    categoryList.current.classList.remove(styles.hover);
    categoryList.current.classList.remove(styles.desk_active);
    setModalVisibility(false);
  };

  useEffect(() => {
    searchQuery.length > 1 &&
      GET(
        "search",
        "movie",
        `&query=${searchQuery}&page=1&include_adult=false`
      ).then((data) => {
        setResults(data);
      });
  }, [searchQuery]);

  useEffect(() => {
    searchQuery.length === 0 && setSearchActive(false);
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [searchQuery, isActive]);

  useEffect(() => {
    GET("genre", `${typeofGenres}/list`).then((data) =>
      setGenreList(data.genres)
    );
  }, [typeofGenres]);

  useEffect(() => {
    const handleEventListener = (e) => {
      if (
        e.target.id !== "main_search" &&
        e.target.tagName !== "path" &&
        e.target.tagName !== "svg" &&
        e.target.id !== "results"
      ) {
        setIsActive(false);
        setSearchActive(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("click", handleEventListener);
    return window.removeEventListener("click", handleEventListener);
  }, []);

  return (
    <>
      <div ref={navBarRef} className={styles.NavBar}>
        <div onClick={() => setModalVisibility(false)} className={styles.logo}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <h3
          onClick={browseClick}
          className={`${styles.browse_btn} ${menuIsActive && styles.active}`}
        >
          Browse <IoMdArrowDropdown className={styles.arrow} />
        </h3>
        <ul
          ref={navBarPage}
          className={`${styles.NavBar__link} ${menuIsActive && styles.active}`}
        >
          <li className={whichLinkActive === "Home" ? styles.active : ""}>
            <Link href="/">
              <a
                onClick={() => {
                  setMenuIsActive(false);
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li
            onMouseOver={(e) => handleOnMouseEnter(e)}
            onMouseOut={(e) => handleOnMouseLeave(e)}
            onClick={handleCategoryClick}
            ref={categoryRef}
          >
            <div ref={iconContainer} className={styles.text_and_icon}>
              Category <IoMdArrowDropdown className={styles.arrow} />
            </div>
          </li>
          <div
            ref={categoryList}
            className={styles.category_list}
            onMouseOver={(e) => handleOnMouseEnter(e)}
            onMouseOut={(e) => handleOnMouseLeave(e)}
          >
            <div className={styles.content}>
              <div className={styles.left_sider}>
                <div className={styles.list_container}>
                  <h3>Top Categories</h3>
                  <ul>
                    <li onClick={(e) => handleOnTypeOfGenreClick(e)} id="movie">
                      Movies
                    </li>
                    <li onClick={(e) => handleOnTypeOfGenreClick(e)} id="tv">
                      TV
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.right_sider}>
                <div className={styles.list_container}>
                  <h4>{typeofGenres} Genres</h4>
                  <ul>
                    {genreList.map((genre, index) => (
                      <li
                        onClick={() => handleOnGenreClick(genre.id)}
                        id={genre.id}
                        key={index}
                      >
                        <Link
                          href={`/genre/${genre.id}&=${genre.name}&=${typeofGenres}`}
                        >
                          <a>{genre.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <li className={whichLinkActive === "Aboutus" ? styles.active : ""}>
            <Link href="/Aboutus">
              <a onClick={() => setMenuIsActive(false)}>About Us</a>
            </Link>
          </li>
        </ul>
        <form
          onSubmit={onSearchSubmit}
          className={`${styles.NavBar__searchbar_container} ${
            isActive && styles.active
          }`}
        >
          <VscChromeClose
            onClick={handleOnCloseClick}
            className={`${styles.close_bar} ${isActive && styles.active}`}
          />
          <AiOutlineSearch
            onClick={handleOnClick}
            className={`${styles.search_icon} ${isActive && styles.active}`}
          />
          <input
            ref={searchInput}
            type="text"
            id="main_search"
            onChange={onInputSearchChange}
            value={searchQuery}
            className={`${styles.NavBar__searchbar} ${
              isActive && styles.active
            }`}
            placeholder="Search"
          />
          <div
            id="results"
            className={
              isSerchActive
                ? styles.results_container + " " + styles.active
                : styles.results_container
            }
          >
            <ul>
              {results.results.map((item, index) => (
                <li onClick={() => handleOnClickLink(item.id)} key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </form>
        {isModalVisibile && (
          <MainModal
            movieID={movieID}
            setModalVisibility={setModalVisibility}
            category={category}
          />
        )}
      </div>
      {children}
    </>
  );
});
