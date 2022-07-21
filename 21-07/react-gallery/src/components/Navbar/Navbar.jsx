import './index.css';
import Button from '../Button';

const Navbar = ({setBtn, toggle}) => {
    return (
        <div className="Navbar">
            <h2>This is simple Gallery</h2>
            <Button btnTextCont={toggle ? 'Hide Gallery' : 'Show Gallery'} onHandleClick={() => setBtn(!toggle)}/>
        </div>
    )
}

export default Navbar;