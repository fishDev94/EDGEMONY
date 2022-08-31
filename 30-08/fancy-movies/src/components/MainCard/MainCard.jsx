import './index.css';

export default function MainCard({ className, data }){  
    const { title, poster_path, vote_average} = data;

    return (
        <div className={className}>
            <img src={"https://image.tmdb.org/t/p/original/"+poster_path} alt="background_film" />
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    )
}