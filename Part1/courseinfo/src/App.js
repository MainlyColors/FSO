function Header({ title }) {
  return <h2>{title}</h2>;
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

function Total({ parts }) {
  return (
    <p>
      total of {parts.reduce((acc, { exercises: n }) => acc + n, 0)} exercises
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Web development curriculum</h1>
      <section>
        <Course course={courses[0]} />
        <Total parts={courses[0].parts} />
      </section>
      <section>
        <Course course={courses[1]} />
        <Total parts={courses[1].parts} />
      </section>
    </>
  );
};

export default App;
