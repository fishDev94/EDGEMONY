import ColorCard from "../ColorCard"
import './index.css'

const ColorList = ({colors}) => {

    return (
        <div className="ColorList">
            { colors.map((col, id) => <ColorCard color={col} key={id}/>) }
           
        </div>
    )
}

export default ColorList;