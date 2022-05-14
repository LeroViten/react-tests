import React from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './store';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
