import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import '@config/i18n';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App /*-- plop hook for providers --*/ />
    </React.StrictMode>
  );
}
