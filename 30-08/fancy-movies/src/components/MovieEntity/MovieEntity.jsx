import React from 'react'

import './index.scss';

const MovieEntity = ({movieData, myRef }) => {
 
  const {
    poster_path,
    original_title,
    genres,
    vote_average,
    tagline,
    title
  } = movieData;

  return (
    <div ref={myRef} className="MovieEntity">
      <div className="MovieEntity__info">
        <div className="MovieEntity__info--title">
          <p>title</p>
          <h1>{ title }</h1>
        </div>
        <div className="MovieEntity__info--bottom">
          <p>rating</p>
          <p>{ vote_average || 'not found' }</p>
          <p>genre</p>
          <ul>
            {
              genres && genres.map(genre => (
                <li key={genre.id}>{ genre.name }</li>
              ))
            }
          </ul>
          <p className="MovieEntity__info--bottom--tagline">{ tagline }</p>
        </div>
      </div>
      <img className="MovieEntity__poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}/>
      <div className="MovieEntity__book">
        <button className="MovieEntity__book--btn">Book it!</button>
      </div>
    </div>
  )
}

export default React.memo(MovieEntity);

