import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  function checkIfNameExistsAlready(newEntry) {
    const arr = persons.filter((person) => person.name === newEntry);
    if (arr.length !== 0) return true;
    return false;
  }

  function formHandler(e) {
    e.preventDefault();
    console.log(e.target);
    if (checkIfNameExistsAlready(newName)) {
      alert(`${newName} is already added to phonebook`);
      return 'reject';
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
  }

  function nameOnChangeHandler(e) {
    console.log('changing', e.target);
    setNewName(e.target.value);
  }

  function numberOnChangeHandler(e) {
    console.log('changing', e.target);
    setNewNumber(e.target.value);
  }

  function filterOnChangeHandler(e) {
    console.log('changing', e.target);
    setNewFilter(e.target.value.toLowerCase());
  }

  const personsFilterArr =
    newFilter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(newFilter)
        );

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <label htmlFor="filter">filter shown with:</label>
        <input id="filter" value={newFilter} onChange={filterOnChangeHandler} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" value={newName} onChange={nameOnChangeHandler} />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input
            id="number"
            value={newNumber}
            onChange={numberOnChangeHandler}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsFilterArr.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
