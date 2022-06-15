function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content({ contArr }) {
  let contentArr = [];

  for (let i = 0; i < contArr.length; i++) {
    const { name, exercises } = contArr[i];
    contentArr.push(<Part desc={name} qty={exercises}></Part>);
  }
  return <div>{[...contentArr]}</div>;
}

function Part({ desc, qty }) {
  return <p>{desc + ' ' + qty}</p>;
}

function Total({ exerciseArr }) {
  return (
    <p>Number of exercises {exerciseArr.reduce((acc, n) => acc + n, 0)}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };

  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header title={course} />
      <Content contArr={[part1, part2, part3]} />
      <Total
        exerciseArr={[part1.exercises, part2.exercises, part3.exercises]}
      />
    </div>
  );
};

export default App;
