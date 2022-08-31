import MainCard from '../MainCard'
import './index.css'

export default function CardList ({data, className, setMovieID, filmSection}) {
    
    return (
        <div className="TopRatedList">
            {data.map((item, index) => <MainCard data={item} filmSection={filmSection} setMovieID={setMovieID} className="MainCard_topRated" key={index}/>)}
        </div>
    )
}