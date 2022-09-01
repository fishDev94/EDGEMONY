import {useState, useEffect, useRef} from 'react'
import MovieEntity from './components/MovieEntity'
import MainInput from './components/MainInput'
import { GET } from './utils/api'; 
import { IoMdArrowDropupCircle } from 'react-icons/io';
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/NavBar/NavBar';
import MainModal from './components/MainModal/MainModal';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieID, setMovieID] = useState("324668")
  const [movieData, setMovieData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
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

  useEffect(() => {

    if (isModalVisibile) {
    document.body.style.overflowY = "hidden";
    window.scrollTo({
      top: 0,
    })
    }
    else {
      document.body.style.overflowY = "visible";
    }
  }, [isModalVisibile])

  return (
    <div className="App" >
      {showScrollTopButton && <IoMdArrowDropupCircle onClick={handleArrowUpClick} className="arrow-icon"/>}
      <Navbar filmSection={filmSection} setModalVisibility={setModalVisibility}/>
      {isModalVisibile && <MainModal setModalVisibility={setModalVisibility} movieData={movieData}/>}
      <MainInput inputValue={inputValue} movieData={movieData} filmSection={filmSection} onHandleSubmit={onHandleSubmit} setInputValue={setInputValue}/>
      <MainSection setMovieID={setMovieID} filmSection={filmSection} setModalVisibility={setModalVisibility}/>
      <MovieEntity movieData={movieData} myRef={filmSection}/>
    </div>
  );
}

export default App;
