import { useState } from 'react';

function Display({ counter }) {
  return <div>{counter}</div>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function App() {
  // needs to be inside your component to work
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  console.log('rendering...', counter);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="reset" />
    </div>
  );
}

export default App;
