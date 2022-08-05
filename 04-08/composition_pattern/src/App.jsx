
import './App.css';
import MainContent from './components/MainContent';
import ColorList from './components/ColorList';

const colors = ['#B04A5A','#4298B5','#47D7AC' ]

function App() {
  return (
    <div className="App">
      <MainContent>
        <h1>My Colors:</h1>
        <ColorList colors={colors}>
        </ColorList> 
      </MainContent>
    </div>
  );
}

export default App;
