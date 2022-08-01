
import './App.css';
import {useState, useReducer} from 'react';
import React from 'react';



function App() {
  const initialArg = {count: 0}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'next':
        return {count: state.count + 1};
      case 'previous':
        return {count: state.count - 1};
      default:
        throw new Error();
  }
  }
  const [state, dispatch] = useReducer(reducer, initialArg);


  const data = [
    {
      id: 1,
      advice: 'Continua ad utilizzare React',
    },
    {
      id: 2,
      advice: 'Molto bello Javascript',
    },
    {
      id: 3,
      advice: 'Usereducer utilizzato',
    },
    {
      id: 4,
      advice: 'e questo è quanto.',
    }
  ];

  
let advice = data[state.count]

  
  const onHandledClickNext = () => {
    dispatch({type: 'next'})
    console.dir(dispatch)
  }

  const onHandledClickPrev = () => {
    dispatch({type: 'previous'})
  }

  return (
    <div className="App">
     <h2>{advice.advice}</h2>
     <p>indice: {advice.id}</p>
     <button disabled={state.count === 0} onClick={onHandledClickPrev}>Previous</button>
     <button disabled={state.count === 3} onClick={onHandledClickNext}>Next</button>
    </div>
  );
}

export default App;
