import { useState } from 'react';
import ImageCard from '../ImageCard'
import galleryMock from '../../assets/galleryMock';
import ModalWindow from '../ModalWindow';
import './index.css';

const Gallery = ({visibility}) => {

  const [isPictureVisible, setPictureVisibility] = useState(false);
  const [url, setUrl] = useState();

  console.log('visibility', visibility)
  return (
    <div className="Gallery">
      { visibility ? (
        <>
          <h2 className="Gallery__header">Gallery</h2>
          <div className="Gallery__content">
            {
              galleryMock.map(image => (<ImageCard onClick={() => {
                setPictureVisibility(!isPictureVisible)
                setUrl(image.url);
              
              }} key={image.id} data={image}/>))
            }
          </div>
        </>
      ): <h2>Nascosto!!!</h2>}
      <ModalWindow url={url} onClick={() => setPictureVisibility(!isPictureVisible)} visibilit={isPictureVisible} />
    </div>
  )
}

export default Gallery;