import axios from 'axios';
import { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((res) => {
      console.log('effect');
      console.log('data fetched');
      setPersons(res.data);
    });
  }, []); // no dependency array === run once on load
  console.log(`total notes:`, persons.length);

  function checkIfNameExistsAlready(newEntry) {
    const arr = persons.filter((person) => person.name === newEntry);
    if (arr.length !== 0) return true;
    return false;
  }

  function formHandler(e) {
    e.preventDefault();
    if (checkIfNameExistsAlready(newName)) {
      alert(`${newName} is already added to phonebook`);
      return 'reject';
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');
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
