function Hello(props) {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
}

function App() {
  console.log('loaded');
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="ryan" age="24" />
      <Hello name="kyle" />
    </div>
  );
}

export default App;
