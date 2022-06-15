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
    <p>
      Number of exercises{' '}
      {exerciseArr.reduce((acc, { exercises: n }) => acc + n, 0)}
    </p>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content contArr={parts} />
      <Total exerciseArr={parts} />
    </div>
  );
};

export default App;
