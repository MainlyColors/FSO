import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(createPointsObject(anecdotes));

  function createPointsObject(dataSet = []) {
    // create new obj if no set given
    const obj = {};
    dataSet.forEach((_, i) => (obj[i] = 0));
    return obj;
  }

  function updatePointsObjectState(obj, key, increment = 1) {
    const objCopy = { ...obj };
    objCopy[key] = points[key] + 1;
    setPoints(objCopy);
  }

  function randomIndex(limit) {
    console.log('random happened');
    // limit not inclusive
    return Math.floor(Math.random() * limit);
  }

  function calcHighestPointsKeyName(obj) {
    const max = Math.max(...Object.values(obj));
    for (let key in obj) {
      if (obj[key] === max) return key;
    }
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => updatePointsObjectState(points, selected)}>
        vote
      </button>
      <button onClick={() => setSelected(randomIndex(anecdotes.length))}>
        next anecdote
      </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[calcHighestPointsKeyName(points)]}</p>
      <p>has {points[calcHighestPointsKeyName(points)]} votes</p>
    </>
  );
};

export default App;
