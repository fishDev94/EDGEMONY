import './App.css';
import MainContent from './components/MainContent';
import AdviceCard from './components/AdviceCard';
import { useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState({});
  const [value, setValue] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice',{ cache: 'no-store' })
    .then((res) => res.json())
    .then(data => setData(data)) 
  }, [value])

  const onBtnClick = () => {
    setValue(!value);
  }

  return (
    <div className="App">
     <MainContent >
      <AdviceCard data={data} onBtnClick={onBtnClick}/>
     </MainContent>
    </div>
  );
}

export default App;