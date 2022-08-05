import './index.css'
import ColorCard from '../ColorCard';

const ColorList = ({colors}) => {

    return (
        <div className="ColorList">
           { colors.map((color, i) => <ColorCard color={color} key={i}/>)}
        </div>
    )
}

export default ColorList;