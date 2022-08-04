import ColorList from '../ColorList';
import './index.css'

const MainContent = ({color}) => {

    return (
        <div className="MainContent">
            <ColorList colors={color} />
        </div>
    )
}

export default MainContent;