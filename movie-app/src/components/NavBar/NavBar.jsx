import './index.scss';
import {logoSvg} from '../../constants/index'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState, useRef, useEffect } from 'react';

export default function NavBar () {
    const searchInput = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const handleOnClick = () => {
        setIsActive(true);
        searchInput.current.focus();
    }

    useEffect(() => {

        const handleEventListener= (e) => {
            
            if (e.target.id !== 'main_search' && e.target.tagName !== 'path' && e.target.tagName !== 'svg') {
                setIsActive(false);
            } 
        
        }

        window.addEventListener('click', (e) => handleEventListener(e));

    }, [])

    return (
        <div className="NavBar">
            <div className='logo'>
                {logoSvg}
            </div>
            <ul className="NavBar__link">
                <li>Home</li>
                <li>Category <IoMdArrowDropdown className="arrow"/></li>
                <li>My Stuff</li>
                <li>About us</li>
            </ul>
            <div className="NavBar__searchbar-container">
                <AiOutlineSearch onClick={handleOnClick} className={`search-icon ${isActive ? 'active' : ''}`}/>
                <input ref={searchInput} type="text" id="main_search" className={`NavBar__searchbar ${isActive ? 'active' : ''}`} placeholder='Search'/>
            </div>
        </div>
    )
}