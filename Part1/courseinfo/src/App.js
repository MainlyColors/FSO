function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content({ content }) {
  const contentArr = content.map(({ name, exercises, id }) => (
    <Part key={id} desc={name} qty={exercises}></Part>
  ));
  return <ul style={{ listStyle: 'none', padding: 0 }}>{contentArr}</ul>;
}

function Part({ desc, qty }) {
  return <li>{desc + ' ' + qty}</li>;
}

function Total({ exerciseArr }) {
  return (
    <p>
      Number of exercises{' '}
      {exerciseArr.reduce((acc, { exercises: n }) => acc + n, 0)}
    </p>
  );
}

function Course({ course }) {
  return (
    <>
      <Header title={course.name} />
      <Content content={course.parts} />
    </>
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
