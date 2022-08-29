import {useState} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo/ListTodo';


function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([...items, value])
    setValue("");
  }

  const handleCancelButton = (i) => {
    setItems(items.filter((item, index, array) => item !== array[i]))
  }

  return (
    <div className="App">
      <div className="Background" />
      <div className="Todo_container">
        <h1>ToDo List:</h1>
        <InputTodo method={handleOnSubmit} value={value} setValue={setValue}/>
        <ListTodo items={items} onCancelClick={handleCancelButton}/>
      </div>
    </div>
  );
}

export default App;
