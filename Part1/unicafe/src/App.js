import React, { useState } from 'react';

function StatisticLine({ text, value, children }) {
  return (
    <tr>
      <td>{text}:</td>
      <td>
        {value}
        {children}
      </td>
    </tr>
  );
}

function Statistics({ good, bad, neutral, allScores }) {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={allScores} />
        <StatisticLine text="average" value={(good - bad) / allScores} />
        <StatisticLine text="positive" value={(good / allScores) * 100}>
          %
        </StatisticLine>
      </tbody>
    </table>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function CalculateAllScores(...scores) {
    return scores.reduce((total, score) => (total += score), 0);
  }

  function checkFeedback() {
    if (good !== 0) return true;
    if (bad !== 0) return true;
    if (neutral !== 0) return true;
    return false;
  }

  const allScores = CalculateAllScores(good, neutral, bad);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)}>good</Button>
      <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button onClick={() => setBad(bad + 1)}>bad</Button>
      <h2>statistics</h2>
      {checkFeedback() ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          allScores={allScores}
        />
      ) : (
        <p>No Feedback given</p>
      )}
    </>
  );
}

export default App;
