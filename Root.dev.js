import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store, { history } from '../store/configureStore';
import App from './App'; // Adjust path as needed

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

export default Root;