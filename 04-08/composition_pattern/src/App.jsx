
import './App.css';
import MainContent from './components/MainContent';
import ColorList from './components/ColorList';
import ColorCard from './components/ColorCard';

const colors = ['#B04A5A','#4298B5','#47D7AC' ]

function App() {
  return (
    <div className="App">
      <MainContent>
        
        <h1>My Colors:</h1>
        <ColorList>
          { colors.map((color, i) => <ColorCard color={color} key={i}/>)}
        </ColorList>
        
      </MainContent>
    </div>
  );
}

export default App;
