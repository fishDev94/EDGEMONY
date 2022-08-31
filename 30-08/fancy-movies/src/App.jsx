import {useState, useEffect, useRef} from 'react'
import MovieEntity from './components/MovieEntity'
import MainInput from './components/MainInput'
import { GET } from './utils/api'; 
import { IoMdArrowDropupCircle } from 'react-icons/io';
import './App.css';
import MainSection from './components/MainSection';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieID, setMovieID] = useState("324668")
  const [movieData, setMovieData] = useState({});
  const filmSection = useRef(null);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }});
    }, [])

  useEffect(() => {
    GET('movie', movieID)
      .then(data => setMovieData(data))
  }, [movieID])

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setMovieID(e.target.value);
    window.scrollTo({
      top: filmSection.current.offsetTop,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleArrowUpClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      {showScrollTopButton && <IoMdArrowDropupCircle onClick={handleArrowUpClick} className="arrow-icon"/>}
      <MainInput inputValue={inputValue} movieData={movieData} onHandleSubmit={onHandleSubmit} setInputValue={setInputValue}/>
      <MainSection />
      <MovieEntity movieData={movieData} myRef={filmSection}/>
    </div>
  );
}

export default App;
