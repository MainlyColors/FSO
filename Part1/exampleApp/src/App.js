function Hello({ name, age }) {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p> So you were probably born in {bornYear()}</p>
      <br />
    </div>
  );
}

// function App() {
//   const name = 'Peter';
//   const age = 10;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// }

function App({ counter }) {
  return <div>{counter}</div>;
}

export default App;
