import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "../src/redux/Store";
import { buyCake, buyIceCream } from "./redux/Action";
import { fetchUsers } from "../src/redux/Action";
// console.log("the_intial_state_is", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("the_updated_state_is", store.getState())
// );
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(fetchUsers);

// unsubscribe();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
