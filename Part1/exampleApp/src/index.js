import React from 'react';
import ReactDOM from 'react-dom/client';

// component import
import App from './App';

// root div element in public index
const rootEl = document.getElementById('root');

// setup react root for component tree
const root = ReactDOM.createRoot(rootEl);

let counter = 1;
// render app component
// root.render(<App counter={counter} />);

function refresh() {
  root.render(<App counter={counter} />);
}

setInterval(() => {
  refresh();
  counter += 1;
}, 1000);
