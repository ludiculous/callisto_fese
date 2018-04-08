import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import App from "containers/App/App";
import registerServiceWorker from "./registerServiceWorker";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import "assets/sass/index.css";

const store = createStore(reducers, {});

ReactDOM.render(( 
  <Provider store={store}>
    <App />
  </Provider>  
), document.getElementById("root"));
registerServiceWorker();
