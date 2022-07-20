import Counter from '../Counter'
import './index.css';
import Gallery from '../Gallery';
import imgUrl from '../../assets/imgurl';

const BASE_URL = 'https://picsum.photos/200/150'

const MainContent = () => {
  return (
    <div className="MainContent">
      <h1 className="MainContent__firstHeader">Base 0</h1>
      <h3 className="MainContent__secondHeader">Questo è il nostro counter a 0! ❤️</h3>
      <Counter defaultValue={0}/>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ipsum labore dignissimos facilis maiores temporibus placeat provident vitae voluptates, quidem doloremque harum. Necessitatibus neque itaque vel voluptatibus officiis facilis laborum.
      </p>
      <Gallery arrayImg={imgUrl} url={BASE_URL}/>
    </div>
  )
}

export default MainContent;