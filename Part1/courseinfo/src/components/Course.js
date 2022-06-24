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

function Course({ course }) {
  return (
    <>
      <Header title={course.name} />
      <Content content={course.parts} />
    </>
  );
}

export default Course;
