import { useState, useEffect } from 'react';
import FormInput from './components/FormInput';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

import serverHelper from './services/serverHelper';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    console.log('effect');
    serverHelper.getAll().then((initialNumbers) => setPersons(initialNumbers));
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
      const checkWithUser = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (checkWithUser) {
        const personToUpdate = persons.find(
          (person) => person.name === newName
        );
        serverHelper
          .updatePerson(
            { ...personToUpdate, number: newNumber },
            personToUpdate.id
          )
          .then((updatedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id === personToUpdate.id
                  ? { ...person, number: updatedPerson.number }
                  : person
              )
            )
          );
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      serverHelper
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
    }

    setNewName('');
    setNewNumber('');
  }

  function handleDelete(id) {
    const deletedPerson = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${deletedPerson.name} ?`)) {
      serverHelper.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== deletedPerson.id));
    }
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
      <PersonsList persons={personsFilterArr} onDelete={handleDelete} />
    </div>
  );
};

export default App;
