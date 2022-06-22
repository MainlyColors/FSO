import { useState } from 'react';

function App() {
  // needs to be inside your component to work
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  console.log('rendering...', counter);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>reset</button>
    </div>
  );
}

export default App;
