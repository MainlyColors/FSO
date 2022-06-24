import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

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

    setPersons(persons.concat({ name: newName }));
  }

  function onChangeHandler(e) {
    console.log('changing', e.target);
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" value={newName} onChange={onChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
