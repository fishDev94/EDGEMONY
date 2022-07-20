import './index.css';
import '../../assets/imgurl';

const Gallery = ({arrayImg, url}) => {

    return (
<div className="Gallery">
    {arrayImg.map(el => <img key={el} id={el} src={url + '?' + el} alt="" />)}
</div>
    );
};

export default Gallery;
