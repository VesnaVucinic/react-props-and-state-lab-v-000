import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fetch-setup';
import {
  createStore,
  combineReducers,
  compose
} from 'redux'
import { Provider } from 'react-redux'

// 1. Get the ingredients to build a store:
//  a reducer, ?? middleware if needed ??

const initialState = {
  type: "all"
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        type: action.newFilter
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  filters
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer()
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
