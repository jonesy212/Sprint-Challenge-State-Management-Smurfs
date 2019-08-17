import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//STEP 1 import provider and createStore
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

//step 4 import reducer
import {reducer} from './reducers/index'

import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById("root");
ReactDOM.render(

<Provider  store={store}>
    <App />
</Provider>, rootElement);