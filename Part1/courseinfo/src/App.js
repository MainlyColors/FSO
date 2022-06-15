function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content({ contArr }) {
  let contentArr = [];

  for (let i = 0; i < contArr.length; i++) {
    contentArr.push(<p>{contArr[i][0] + ' ' + contArr[i][1]}</p>);
  }
  return [...contentArr];
}

function Total({ exerciseArr }) {
  return (
    <p>Number of exercises {exerciseArr.reduce((acc, n) => acc + n, 0)}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  let contentArray = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3],
  ];

  return (
    <div>
      <Header title={course} />
      <Content contArr={contentArray} />
      <Total exerciseArr={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
