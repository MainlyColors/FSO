import { useState } from 'react';

function App() {
  // needs to be inside your component to work
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log('rendering...', counter);
  return <div>{counter}</div>;
}

export default App;
