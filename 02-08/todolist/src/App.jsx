import {useReducer} from 'react';
import React from 'react';
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';


const initData = {
  listTask: [], 
  inputValue: '', 
  count: 1
};

function reducer(state, action) {
  let {listTask, count, inputValue} = state
  const {type, payload} = action 

switch (type) {
      case 'insert' : 
      {
        let id = count;
        count++;
        listTask = [...listTask, { ...tryTask, id }] 
      }
        break;   
      case 'delete' : 
        {
          listTask = listTask.filter((element) =>  element.id !== payload) 
        }
      break;
      case 'update' : 
       {
        inputValue = payload
      }
      break;
      default: 
};

return {...state, listTask, count, inputValue}
}
const tryTask = {};

const App = () => {
const [state, dispatch] = useReducer(reducer, initData);

const onInputChange = (e) => {
   tryTask.text = e.target.value;
  dispatch({ type: 'update', payload: e.target.value})
  };

const onHandleClick = (e) => {
  e.preventDefault();
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
