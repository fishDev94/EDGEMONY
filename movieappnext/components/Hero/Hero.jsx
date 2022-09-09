import styles from "./index.module.scss";
import { useEffect, useState, useRef, Fragment, memo } from "react";
import { GET } from "../../utils/api";
import { BASE_URL_IMG } from "../../constants";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

export default memo(function Hero({ setMovieID, setModalVisibility }) {
  const [myIndex, setIndex] = useState(0);
  const [valuePage, setValuePage] = useState(0);
  const counter = useRef({ value: 0 });

  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroRoundPages = useRef(null);
  const btnContainer = useRef(null);

  const [popularList, setPopularList] = useState({
    results: [
      {
        backdrop_path: "",
        title: "",
        vote_average: "",
        overview: "",
      },
    ],
  });

  const handleOnNextButtonClick = () => {
    setIndex((prev) => prev + 1);
    setValuePage((prev) => prev + 1);
    counter.current.value += 1;
  };

  const handleOnBackButtonClick = () => {
    setIndex((prev) => prev - 1);
    setValuePage((prev) => prev - 1);
    counter.current.value -= 1;
  };

  const handleOnPageHeroClick = (e) => {
    setIndex(Number(e.target.id));
    setValuePage(Number(e.target.id));
  };

  const handleOnImgClick = (id) => {
    setMovieID(id);
    setModalVisibility(true);
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    const refBtn = window;

    const onTouchStart = (e) => {
      if (e.target.className === "Hero_Hero_img__rjzAe") {
        touchStartX = e.changedTouches[0].clientX;
      }
    };

    const onTouchEnd = (e) => {
      if (e.target.className === "Hero_Hero_img__rjzAe") {
        touchEndX = e.changedTouches[0].clientX;
        change();
      }
    };

    const change = () => {
      if (touchStartX > touchEndX && counter.current.value < 19) {
        setIndex((prev) => prev + 1);
        setValuePage((prev) => prev + 1);
        counter.current.value += 1;
      }
      if (touchStartX < touchEndX && counter.current.value > 0) {
        setIndex((prev) => prev - 1);
        setValuePage((prev) => prev - 1);
        counter.current.value -= 1;
      }
    };

    refBtn.addEventListener("touchstart", onTouchStart);

    refBtn.addEventListener("touchend", onTouchEnd);

    return () => {
      refBtn.removeEventListener("touchstart", onTouchStart);
      refBtn.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    GET("movie", "popular", `&page=1&include_adult=false`).then((data) => {
      setPopularList(data);
    });
  }, []);

  return (
    <div ref={heroRef} className={styles.Hero}>
      <h1>{popularList.results[myIndex].title}</h1>
      {popularList.results.map((item, index) => (
        <Fragment key={index}>
          <img
            key={index}
            ref={heroImgRef}
            onClick={() => handleOnImgClick(item.id)}
            style={{ right: valuePage * 100 + "vw" }}
            className={styles.Hero_img}
            src={`${BASE_URL_IMG}${item.backdrop_path}`}
            alt="hero-img"
          />
        </Fragment>
      ))}
      <div className={styles.rounded_btn_container}>
        {popularList.results.map((_, index) => (
          <button
            key={index}
            onClick={handleOnPageHeroClick}
            ref={heroRoundPages}
            className={
              myIndex === index
                ? styles.btn_rounded + " " + styles.active
                : styles.btn_rounded
            }
            id={index}
          />
        ))}
      </div>
      <div ref={btnContainer} className={styles.btn_container}>
        <button
          style={
            myIndex === 0
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1, pointerEvents: "all" }
          }
          onClick={handleOnBackButtonClick}
        >
          <MdArrowBackIosNew className={styles.hero_arrow} />
        </button>
        <button
          style={
            myIndex === popularList.results.length - 1
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1, pointerEvents: "all" }
          }
          onClick={handleOnNextButtonClick}
        >
          <MdArrowForwardIos className={styles.hero_arrow} />
        </button>
      </div>
    </div>
  );
});
