import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
);
