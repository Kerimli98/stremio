import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore , compose, applyMiddleware} from "redux";
import reducers from './reducers'
const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducers, composeEnhancers(applyMiddleware()));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
