import MainCard from '../MainCard'
import { memo } from 'react';
import './index.scss'

export default memo(function CardList ({data, className, setMovieID, filmSection, setModalVisibility}) {
    
    return (
        <div className="TopRatedList">
            {data.map((item, index) => <MainCard setModalVisibility={setModalVisibility} data={item} filmSection={filmSection} setMovieID={setMovieID} className="MainCard_topRated" key={index}/>)}
        </div>
    )
})