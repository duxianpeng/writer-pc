import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import CommentApp from "./containers/CommentApp";
import { Button } from "antd";
import App from "./pages/main";
import RouterDemo1 from "./pages/routerdemo/demo1/Main";
import RouterDemo2 from "./pages/routerdemo/demo2/router";
import Demo from "./demo";
import MyRouter from "./router";
import configureStore from '../shared/store'
import { getInitialStateRenderer } from 'electron-redux';
const initialState = getInitialStateRenderer();

const store = configureStore(initialState, 'renderer');



ReactDOM.render(
  <Provider store={store}>
    <MyRouter />
  </Provider>,
  document.getElementById("app")
);














