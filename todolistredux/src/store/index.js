import { combineReducers, createStore } from "redux";

const initialTaskState = {
  taskList: [],
  user: {
    userName: "",
  },
};

function taskReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter(
        (_, index, array) => array[index] !== array[action.payload]
      );
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
  taskList: taskReducer,
  user: userReducer,
});

const store = createStore(rootReducer, initialTaskState);

export default store;
