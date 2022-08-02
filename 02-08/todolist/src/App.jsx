import {useReducer} from 'react';
import React from 'react';
import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

let id = 0;
const initData = {
  listTask: [],
  inputValue: '',
};
function reducer(state, action) {
  let {listTask, inputValue} = state
  const {type, payload} = action 

switch (type) {
  case ('insert') : { 
    
    listTask = [...listTask, {...tryTask }]
    inputValue = '';
  }
  case ('delete') : {
    listTask = listTask.filter((obj) => obj.id -1 !== payload)
  }
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
  tryTask['id'] = ++id;
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
      <form onSubmit={onHandleClick} className="form_todo" >
        <Input value={state.inputValue} onChange={onInputChange} />
        <Button >Inserisci</Button>
      </form>
      <TodoList data={state.listTask} dltBtn={() => onDeleteBtn}/>
    </div>
  );
}

export default App;
