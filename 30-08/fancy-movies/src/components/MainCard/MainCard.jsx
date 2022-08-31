import './index.css';

export default function MainCard({ className, data, setMovieID, filmSection }){  
    const { title, poster_path, vote_average, id} = data;
    
const handleOnClick = () => {
    setMovieID(id);
    window.scrollTo({
        top: filmSection.current.offsetTop,
        left: 0,
        behavior: "smooth"
      });
      
}

    return (
        <div className={className} onClick={handleOnClick}>
            <img src={"https://image.tmdb.org/t/p/original/"+poster_path} alt="background_film" />
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    )
}