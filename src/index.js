import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
