import './index.css';
import logo from '../../LOGOM.png';
// import Title from '../Title';
import Menu from '../Menu';

function Navbar() {
  return (
    <div className="navbar">
        <img className="img-logo" src={logo}></img><Menu />
    </div>
  );
}

export default Navbar;