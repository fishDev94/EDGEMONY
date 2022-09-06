import './index.scss';
import {logoSvg} from '../../constants/index'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState, useRef, useEffect, memo } from 'react';

export default memo(function NavBar () {
    const searchInput = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [menuIsActive, setMenuIsActive] = useState(false);

    const handleOnClick = () => {
        setIsActive(true);
        searchInput.current.focus();
    }

    const browseClick = () => {
        if (menuIsActive) {
            setMenuIsActive(false)
        } else {
        setMenuIsActive(true);
        }
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
            <h3 onClick={browseClick} className={menuIsActive ? "browse-btn active" : "browse-btn"}>Browse <IoMdArrowDropdown className="arrow"/></h3>
            <ul className={menuIsActive ? "NavBar__link active" : "NavBar__link"}>
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
})