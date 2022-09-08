import "./App.scss";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar/NavBar";
import MainModal from "./components/MainModal/MainModal";

function App() {
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [movieID, setMovieID] = useState("");

  return (
    <div className="App">
      <NavBar setMovieID={setMovieID} setModalVisibility={setModalVisibility} />
      <Hero />
      <MainSection
        setModalVisibility={setModalVisibility}
        setMovieID={setMovieID}
      />
      {isModalVisibile && (
        <MainModal movieID={movieID} setModalVisibility={setModalVisibility} />
      )}
    </div>
  );
}

export default App;
