import './index.css'

const Navbar = () => {

    return (
        <div className="Navbar">
            <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" className="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" className="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" className="ccompli2" fill="#FFBC7D"></path> </svg>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, aperiam!</p> */}
            <ul className='Navbar__list'>
                <li>Menu</li>
                <li>Notifiche</li>
                <li>Profilo</li>
                <li className="log_out">Log Out</li>
            </ul>
        </div>
    )
}

export default Navbar;