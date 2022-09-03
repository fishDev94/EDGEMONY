import './index.css';
import { GET } from '../../utils/api'
import { memo, useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default memo(function Navbar({ callback, setMovieID, filmSection, setModalVisibility }) {
    const [value, setValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [results, setResults] = useState({results: []});
    const [isActive, setActive] = useState(false);

    const handleOnClickLink = () => {
        callback()
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        
        setSearchQuery(value);
        setValue('');
    }

    useEffect(() => {
        const onEventListener = () => {  
                setActive(false);
                setPageNumber(1);
        }

        window.addEventListener('click', (e) =>{
            if (e.target.className !== 'list-results_button-container' && e.target.tagName !== 'BUTTON') {
                onEventListener(e)
            }
        })

        return window.removeEventListener('click', (e)=> {
            onEventListener(e)
        })
    }, [])

    useEffect(() => {
        GET('search', 'movie', `&query=${searchQuery}&page=${pageNumber}&include_adult=false`)
        .then(data => {setResults(data)})
    }, [searchQuery, pageNumber]);

    return (
        <div className="NavBar">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="NavBar-inputcontainer">
                    <input type="text" onChange={(e) => {setSearchQuery(e.target.value); setActive(true)}} value={searchQuery} className="NavBar_search" placeholder="Search" />
                    <FaSearch className='search-icon' />
                </div>
            </form>
            <div id="list-results" className={`search_results ${isActive ? 'active' : ''}`} >
                <ul className='search_results-list'>
                   {results.results && results.results.length > 1
                   ? results.results.map((item, index)=> <li key={index} onClick={(e) => {setMovieID(e.target.id); callback()}} id={item.id}>{item.title}</li>)
                    : <p>No results found...</p>
                    }
                </ul>
                <div className="list-results_button-container">
                <button style={results.page > 1 ? {opacity: 1, pointerEvents: 'all'} : {opacity: 0, pointerEvents: 'none'}} onClick={() => setPageNumber(prev => prev - 1)} className="list-results-btn">{"< Back"}</button> 
                   {results.page && results.total_pages > results.page ? <p className='results-page'>{results.page}/{results.total_pages}</p> : null}
                <button style={results.total_pages > results.page ? {opacity: 1, pointerEvents: 'all'} : {opacity: 0, pointerEvents: 'none'}} onClick={() => setPageNumber(prev => prev + 1)} className="list-results-btn">{"Next >"}</button>
               </div>
            </div>
            <ul className="NavBar_list">
                <li onClick={handleOnClickLink}>Films</li>
                <li>About us</li>
            </ul>
        </div>
    )
});