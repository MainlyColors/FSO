import React from 'react';
import ReactDOM from 'react-dom/client';

// component import
import App from './App';

// root div element in public index
const rootEl = document.getElementById('root');

// setup react root for component tree
const root = ReactDOM.createRoot(rootEl);

// render app component
root.render(<App />);
