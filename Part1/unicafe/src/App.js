import React, { useState } from 'react';

function Statistics({ good, bad, neutral, allScores }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
      }}
    >
      <li>good:{good}</li>
      <li>neutral:{neutral}</li>
      <li>bad:{bad}</li>
      <li>all: {allScores}</li>
      <li>average: {(good - bad) / allScores || 0}</li>
      <li>positive: {good / allScores}%</li>
    </ul>
  );
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function CalculateAllScores(...scores) {
    return scores.reduce((total, score) => (total += score), 0);
  }

  const allScores = CalculateAllScores(good, neutral, bad);

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allScores={allScores}
      />
    </>
  );
}

export default App;
