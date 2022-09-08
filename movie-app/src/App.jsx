import "./App.scss";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
