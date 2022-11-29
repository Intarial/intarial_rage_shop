import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Shop } from "./Shop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);
