import ColorList from '../ColorList';
import './index.css'

const MainContent = (props) => {
console.log(props)
    return (
        <div className="MainContent">
            <ColorList {...props} />
        </div>
    )
}

export default MainContent;