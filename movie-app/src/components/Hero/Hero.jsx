import './index.scss';
import { useEffect, useState } from 'react';
import { GET } from '../../utils/api'
import { BASE_URL_IMG } from '../../constants';
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'

export default function Hero () {

    const [index, setIndex] = useState(0);

    const [popularList, setPopularList] = useState({ results: [{
        backdrop_path: '',
        title: 'suca',
        vote_average: '',
        overview: '',
    }]
       
    });

    const {backdrop_path, title, vote_average} = popularList.results[index]

    useEffect(() => {
        GET('movie', 'popular', `&page=1&include_adult=false`)
        .then(data => {setPopularList(data); console.log(data)})

    }, [])

    return (
        <div className="Hero">
            <h1>{title}</h1>
            <img className="Hero-img" src={`${BASE_URL_IMG}${backdrop_path}`} alt="hero-img"/>
            <div className="btn-container">
                <button style={ index === 0 ? {opacity: 0, pointerEvents: 'none' } : {opacity: 1, pointerEvents: 'all'}} onClick={() => setIndex(prev=> prev - 1)}><MdArrowBackIosNew className="hero-arrow"/></button>
                <button style={ index === popularList.results.length - 1 ? {opacity: 0, pointerEvents: 'none' } : {opacity: 1, pointerEvents: 'all'}} onClick={() => setIndex(prev=> prev + 1)}><MdArrowForwardIos className='hero-arrow'/></button>
            </div>
        </div>
    )
}