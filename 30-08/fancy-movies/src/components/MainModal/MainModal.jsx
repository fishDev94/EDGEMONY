import './index.css';
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
            <div className="MainModal__container">
                <MainCard style={{height: "100%"}} titleStyle={{display: "none"}} data={movieData} className="MainCard_popular"/>
                <div className="MainModal__info">
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <p className='release'>{release_date}</p>
                </div>
                <div onClick={handleOnClickClose} className='close'>X</div>
            </div>
        </div>
    )
}