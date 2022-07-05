import { Fragment } from 'react';

function PersonsList({ persons, onDelete }) {
  return (
    <>
      {persons.map((person) => (
        <Fragment key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => onDelete(person.id)}>delete</button>
        </Fragment>
      ))}
    </>
  );
}

export default PersonsList;
