import { useState } from 'react';
import FormInput from './components/FormInput';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

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

  function factoryOnChangeHandler(stateChange) {
    return (e) => stateChange(e.target.value);
  }

  const nameHandler = factoryOnChangeHandler(setNewName);
  const numberHandler = factoryOnChangeHandler(setNewNumber);
  const filterHandler = factoryOnChangeHandler(setNewFilter);

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
        <FormInput
          htmlFor="filter"
          value={newFilter.toLowerCase()}
          onChange={filterHandler}
          labelText="filter shown with"
        />
      </div>
      <h2>add a new</h2>
      <PersonForm
        nameValue={newName}
        nameOnChange={nameHandler}
        numberValue={newNumber}
        numberOnChange={numberHandler}
        formOnSubmit={formHandler}
      />

      <h2>Numbers</h2>
      <PersonsList persons={personsFilterArr} />
    </div>
  );
};

export default App;
