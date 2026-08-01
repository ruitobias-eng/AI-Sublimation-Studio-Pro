import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle benign ResizeObserver loop notifications common in canvas/WebGL container resizes
window.addEventListener('error', (e) => {
  if (e.message && (e.message.includes('ResizeObserver') || e.message.includes('undelivered notifications'))) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }
});

// Register PWA Service Worker
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.log('SW registration failed:', err);
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
