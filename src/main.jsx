import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import { GlobalStyles } from './styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>
);
