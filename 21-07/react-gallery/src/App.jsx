import { useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [isGalleryVisibile, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      {/* <navbar className="navbar">
      <h4 className="navbar__title">Gallery Page</h4>
      <Button btnTextCont={isGalleryVisibile ? 'Hide Gallery' : 'Show Gallery'} onHandleClick={() => setGalleryVisibility(!isGalleryVisibile)}/>
      </navbar> */}

      <Navbar setBtn={setGalleryVisibility} toggle={isGalleryVisibile}/>
      <Hero />
      <Gallery visibility={isGalleryVisibile}/>
      
    </div>
  );
}

export default App;
