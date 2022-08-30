import {useState, useEffect} from 'react'
import MovieEntity from './components/MovieEntity'
import MainInput from './components/MainInput'
import { GET } from './utils/api'; 
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieID, setMovieID] = useState("324668")
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    GET('movie', movieID)
      .then(data => setMovieData(data))
  }, [movieID])

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setMovieID(e.target.value);
  }

  return (
    <div className="App">
      <MainInput inputValue={inputValue} movieData={movieData} onHandleSubmit={onHandleSubmit} setInputValue={setInputValue}/>
      <MovieEntity movieData={movieData}/>
    </div>
  );
}

export default App;
