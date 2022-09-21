import "./App.css";
// import { useReducer } from "react";
import MainSection from "./components/MainSection";
// import { counterData } from ".";
// import { initialState } from "./constants/constants";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCRESE":
//       return { ...state, count: state.count + 1 };
//     case "DECRESE":
//       return { ...state, count: state.count - 1 };
//     case "SET_VALUE":
//       return { ...state, count: action.payload };
//     case "SET_USERNAME":
//       return { ...state, userName: action.payload };
//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <counterData.Provider value={{ state, dispatch }}>
    <div className="App">
      <MainSection />
    </div>
    // </counterData.Provider>
  );
}

export default App;
