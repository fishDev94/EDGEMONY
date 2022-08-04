import ColorCard from "../ColorCard"
import './index.css'

const ColorList = ({children}) => {

    return (
        <div className="ColorList">
           {children}
        </div>
    )
}

export default ColorList;