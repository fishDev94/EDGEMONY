import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
      
    </div>
  );
}

export default App;