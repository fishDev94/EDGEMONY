import MainCard from '../MainCard'
import './index.css'

export default function CardList ({data, className}) {
    
    return (
        <div className="TopRatedList">
            {data.map((item, index) => <MainCard data={item} className="MainCard_topRated" key={index}/>)}
        </div>
    )
}