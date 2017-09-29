import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { loadState, saveState } from './storage';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const persistedStore = loadState();
const store = createStore(reducer, persistedStore);
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
