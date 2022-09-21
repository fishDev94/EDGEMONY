import { createStore, combineReducers } from "redux";

export const initialState = {
  count: {
    value: 0,
  },
  user: {
    userName: "",
  },
};

function counterReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.payload };
    case "DECREMENT":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: counterReducer,
  user: userReducer,
});
const store = createStore(rootReducer, initialState);

export default store;
