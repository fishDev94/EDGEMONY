import "./index.scss";
import { useEffect, useState, memo } from "react";
import { GET } from "../../utils/api";
import { BASE_URL_IMG } from "../../constants";

export default memo(function MainModal({ movieID, setModalVisibility }) {
  const [className, setClassName] = useState("MainModal");
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setClassName("MainModal open");
  }, []);

  const handleOnClickClose = () => {
    setModalVisibility(false);
  };

  useEffect(() => {
    GET("movie", movieID).then((data) => {
      setMovieData(data);
      console.log(data);
    });
  }, [movieID]);

  //   const { title, overview, release_date } = movieData;

  return (
    <div className={className}>
      <div className="MainModal__container">
        <div className="img_container">
          <img src={BASE_URL_IMG + movieData.poster_path} alt="poster" />
        </div>
        <div
          className="MainModal__container-background"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")`,
          }}
        />
        <div className="MainModal__container-background_overlay" />
        <div className="MainModal__container-background_halfoverlay" />
        <div className="MainModal__info">
          <div className="MainModal__info_container_title">
            <h2 className="MainModal__info_title">{movieData.title}</h2>
            <p className="MainModal__tagline">{movieData.tagline}</p>
          </div>
          <ul className="MainModal__info_genres">
            {movieData.genres &&
              movieData.genres.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
          </ul>
          <p className="MainModal__description">{movieData.overview}</p>
          <p className="release">{movieData.release_date}</p>
        </div>
        <div onClick={handleOnClickClose} className="close">
          X
        </div>
      </div>
    </div>
  );
});
