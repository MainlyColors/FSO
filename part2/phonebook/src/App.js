import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '815-637-1258' },
  ]);
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
