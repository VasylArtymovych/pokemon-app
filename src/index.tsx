import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'store';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="pokemon-app">
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
