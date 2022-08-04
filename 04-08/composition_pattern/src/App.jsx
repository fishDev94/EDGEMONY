
import './App.css';
import MainContent from './components/MainContent';

const colors = ['#B04A5A','#4298B5','#47D7AC' ]

function App() {
  return (
    <div className="App">
      <h1>My Colors:</h1>
      <MainContent {...colors}/>
    </div>
  );
}

export default App;
