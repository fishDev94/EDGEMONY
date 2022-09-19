import WrapperCard from "../WrapperCard/WrapperCard";
import styles from "./index.module.scss";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useRef, useState, useEffect, memo, useContext } from "react";
import { modalVisibility } from "../../pages/_app";

export default memo(function CardList({ data, title, setMovieID }) {
  const listRef = useRef();
  const [isBackVisible, setIsBackVisibility] = useState(false);
  const [isNextVisible, setIsNextVisibility] = useState(true);
  const [clicked, setClicked] = useState(false);

  const { setModalVisibility } = useContext(modalVisibility);

  const handleOnBackButtonClick = () => {
    listRef.current.scrollTo({
      top: 0,
      left: listRef.current.scrollLeft - 800,
      behavior: "smooth",
    });
    setClicked(!clicked);
  };

  const handleOnNextButtonClick = () => {
    listRef.current.scrollTo({
      top: 0,
      left: listRef.current.scrollLeft + 800,
      behavior: "smooth",
    });
    setClicked(!clicked);
  };

  const handleOnClickCard = (e) => {
    setMovieID(e.target.id);
    setModalVisibility(true);
  };

  useEffect(() => {
    let maxWidth = listRef.current.scrollWidth - listRef.current.clientWidth;

    const hideAndShowPageButton = () => {
      if (listRef.current.scrollLeft === listRef.current.offsetLeft) {
        setIsBackVisibility(false);
      } else {
        setIsBackVisibility(true);
      }

      if (listRef.current.scrollLeft === maxWidth) {
        setIsNextVisibility(false);
      } else {
        setIsNextVisibility(true);
      }
    };

    listRef.current.addEventListener("scroll", hideAndShowPageButton);
  }, [clicked]);

  return (
    <div className={styles.CardList_section}>
      <h3>{title}</h3>
      <div ref={listRef} className={styles.CardList}>
        {data.map((item, index) => (
          <WrapperCard
            handleOnClickCard={handleOnClickCard}
            listRef={listRef}
            data={item}
            key={index}
          />
        ))}
      </div>
      <div className={styles.button_container}>
        <MdArrowBackIosNew
          onClick={handleOnBackButtonClick}
          className={
            isBackVisible ? styles.button_back : styles.button_back_disabled
          }
        />
        <MdArrowForwardIos
          onClick={handleOnNextButtonClick}
          className={
            isNextVisible
              ? styles.button_forward
              : styles.button_forward_disabled
          }
        />
      </div>
    </div>
  );
});
