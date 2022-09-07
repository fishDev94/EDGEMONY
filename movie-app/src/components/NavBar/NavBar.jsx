import styles from './index.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState, useRef, useEffect, memo } from 'react';
import Logo from './Logo';

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
        <div className={styles.NavBar}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <h3 onClick={browseClick} className={menuIsActive ? styles.browse_btn + " " + styles.active : styles.browse_btn}>Browse <IoMdArrowDropdown className={styles.arrow}/></h3>
            <ul className={menuIsActive ? styles.NavBar__link + " " + styles.active : styles.NavBar__link}>
                <li>Home</li>
                <li>Category <IoMdArrowDropdown className={styles.arrow}/></li>
                <li>My Stuff</li>
                <li>About us</li>
            </ul>
            <div className={styles.NavBar__searchbar_container}>
                <AiOutlineSearch onClick={handleOnClick} className={`${styles.search_icon} ${isActive ? styles.active : ''}`}/>
                <input ref={searchInput} type="text" id="main_search" className={`${styles.NavBar__searchbar} ${isActive ? styles.active : ''}`} placeholder='Search'/>
            </div>
        </div>
    )
})