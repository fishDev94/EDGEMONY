import './index.scss';
import { memo, useCallback } from 'react';

export default memo(function MainCard({ className, data, setMovieID, style={},titleStyle={}, setModalVisibility=()=>{} })
{  
    const { title, poster_path, vote_average, id, placeholder} = data;

    const handleOnClick = useCallback(() => {
    setMovieID(id);
    setModalVisibility(true)
    }, [setMovieID, setModalVisibility, id])


    return (
        <div className={className} style={style} onClick={handleOnClick}>
            <img src={poster_path ? "https://image.tmdb.org/t/p/original/"+poster_path : placeholder} alt="background_film" />
            <h3 style={titleStyle}>{title}</h3>
            <span>{vote_average}</span>
        </div>
    )
})