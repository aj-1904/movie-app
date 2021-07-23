import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

// Curried form - function logger (obj, next, action)
// logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    console.log("ACTION_TYPE = ", action.type);
    next(action);
  };

//Create Store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
// console.log('BEFORE STATE', store.getState());

// //dispatch used to send actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// })
// console.log('AFTER STATE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
