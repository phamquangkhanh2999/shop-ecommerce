import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
