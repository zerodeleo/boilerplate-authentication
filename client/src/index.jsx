import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Context
import AuthContextProvider from './context/AuthContextProvider';

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>
);
