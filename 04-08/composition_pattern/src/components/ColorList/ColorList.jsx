import ColorCard from "../ColorCard"
import './index.css'

const ColorList = (props) => {

    return (
        <div className="ColorList">
            { 
        
            Object.values(props).map((col, id) => <ColorCard color={col} key={id}/>)
         }
           
        </div>
    )
}

export default ColorList;