import { useState, useEffect } from 'react';
import { GET } from '../../utils/api'
import MainCard from '../MainCard';
import CardList from '../CardList/CardList';
import './index.css';

export default function MainSection(){
    const [movieLists, setMovieLists] = useState({});

    useEffect(() => {
      GET('movie', 'popular', '&language=en-US&page=1')
        .then(data => setMovieLists(prev => ({ ...prev, popular: data.results })));
  
      GET('movie', 'top_rated', '&language=en-US&page=1')
        .then(data => setMovieLists(prev => ({ ...prev, topRated: data.results })));
        
      GET('movie', 'upcoming', '&language=en-US&page=1')
        .then(data => setMovieLists(prev => ({ ...prev, upcoming: data.results })));
    }, []);


    return (
        <div className="MainSection">
          <div className="MainSection_background--overlay" />
            <div className="MainSection_background" />
            {movieLists.popular && <MainCard data={movieLists.popular[0]} className="MainCard_popular" />}
            <div className="MainSection_content">
              {movieLists.topRated && <CardList data={movieLists.topRated} className="MainCard_topRated"/>}
              {movieLists.upcoming && <CardList data={movieLists.upcoming} className="MainCard_topRated"/>}
            </div>
        </div>
    )
}