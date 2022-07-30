import './index.css'
import { DELETE } from '../../utils/api'
import logo from '../../assets/logostarwars_white.png'

const Navbar = () => {

    const deleteFn = (id) => {
        DELETE('friends', id)
        .then(() => {localStorage.removeItem('username.id');
                    localStorage.removeItem('username');
                    localStorage.removeItem('imgUrl')
    
    })
        .then(() => window.location.reload())
        
        
      }

    return (
        <div className="Navbar">
            <img src={logo} alt="" className="Navbar__logo" />
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aperiam!</p> */}
            <ul className='Navbar__list'>
                <img className='Navbar__username-img' src={localStorage.getItem('imgUrl')} alt="user-img" /><p>{localStorage.getItem('username')}</p>
                <li onClick={() => {;
                deleteFn(localStorage.getItem('username.id'));
                
            
            }} 
            className="log_out">Log Out</li>
            </ul>
        </div>
    )
}

export default Navbar;