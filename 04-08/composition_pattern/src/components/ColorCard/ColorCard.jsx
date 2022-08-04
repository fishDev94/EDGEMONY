import './index.css'

const ColorCard = ({color}) => {

    return (
        <div className="ColorCard" >
            <div className="ColorCard__background" style={{backgroundColor: color}}></div>
            <p className="ColorCard__text" style={{color: color}}>{color}</p>
        </div>
    )
}

export default ColorCard;