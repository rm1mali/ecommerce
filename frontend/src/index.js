import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

// Use createRoot API for React 18
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);

