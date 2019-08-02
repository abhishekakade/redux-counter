/* eslint-disable no-unreachable */
import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  // returns undefined
  console.log("reducer", action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log("redux store created", store.getState());

// console.log("done dispatching action", store.getState());
// store.dispatch({ type: "INCREMENT" });
// console.log("done dispatching action", store.getState());
// store.dispatch({ type: "DECREMENT" });
// console.log("done dispatching action", store.getState());

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
