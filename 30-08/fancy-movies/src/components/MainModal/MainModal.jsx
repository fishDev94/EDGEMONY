import './index.scss';
import MainCard from '../MainCard'
import { useEffect ,useState } from 'react';

export default function MainModal({movieData, setModalVisibility}) {

    const [className, setClassName] = useState("MainModal")

    useEffect(() => {
        setClassName("MainModal open");
    },[])

    const handleOnClickClose = () => {
        setModalVisibility(false);
    }

    const {
        title,
        overview,
        release_date,
      } = movieData;

    return (
        <div className={className}>
            <div className="MainModal__container" >
                <div className="MainModal__container-background" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieData.backdrop_path}")` }} />
                <div className="MainModal__container-background_overlay" />
                <div className="MainModal__container-background_halfoverlay" />
                <MainCard style={{height: "100%", opacity:"1"}} titleStyle={{display: "none"}} data={movieData} className="MainCard_popular"/>
                <div className="MainModal__info">
                    <div className="MainModal__info_container_title">
                        <h2 className='MainModal__info_title'>{title}</h2>
                        <p className="MainModal__tagline">{movieData.tagline}</p>
                    </div>
                    <ul className="MainModal__info_genres" >
                        {movieData.genres.map((item, index) => <li key={index}>{item.name}</li>)}
                    </ul>
                    <p className="MainModal__description">{overview}</p>
                    <p className='release'>{release_date}</p>
                </div>
                <div onClick={handleOnClickClose} className='close'>X</div>
            </div>
        </div>
    )
}