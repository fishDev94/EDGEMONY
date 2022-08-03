import {useReducer} from 'react';
import React from 'react';
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

let count = 0;
const initData = {
  listTask: [], 
  inputValue: '', 
};

function reducer(state, action) {
  let {listTask} = state
  const {type, payload} = action 

switch (type) {
  case 'insert' : 
  {
    let idn = count;
    ++count;
    listTask = [...listTask, { ...tryTask, idn }] 
    console.log(listTask);
  }
    break;   
  case 'delete' : 
    listTask = listTask.filter((element) =>  element.idn !== payload) 
  break;
  default:
}
return {...state, listTask}
}
const tryTask = {};

const App = () => {
const [state, dispatch] = useReducer(reducer, initData);

const onInputChange = (e) => {
   tryTask.text = e.target.value;
  dispatch(state.inputValue = e.target.value)
  };

const onHandleClick = (e) => {
  e.preventDefault();
  // tryTask.id = ++count;
  dispatch({
    type: 'insert', 
  })
  state.inputValue = '';
}

const onDeleteBtn = (id) => {
  dispatch({
    type: 'delete',
    payload: id,
  })
  
}
  return (
    <div className="App">
      <h1>TODO List:</h1>
      <form onSubmit={onHandleClick} className="form_todo" >
        <Input value={state.inputValue} onChange={onInputChange} />
        <Button >Inserisci</Button>
      </form>
      <TodoList data={state.listTask} dltBtn={onDeleteBtn}/>
    </div>
  );
}

export default App;
