import {useState} from 'react';
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {

const [list, setList] = useState([]);
const [task, setTask] = useState('');

const onInputChange = (e) => {
  setTask(e.target.value);
  console.log(e.target.value);

}

const onHandleClick = (e) => {
  e.preventDefault();
  console.log(task)
  setList([...list, task]);
  setTask('');
}

  return (
    <div className="App">
      <form onSubmit={onHandleClick} className="form_todo" >
        <Input onChange={onInputChange} inputValue={task}/>
        <Button >Inserisci</Button>
      </form>
      <TodoList setList={setList} data={list}/>
    </div>
  );
}

export default App;
