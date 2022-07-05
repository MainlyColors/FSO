import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/notes').then((res) => {
      console.log('promise fulfilled');
      setNotes(res.data);
    });
  }, []);
  console.log('render', notes.length, 'notes');

  const addNoteHandler = (e) => {
    e.preventDefault();
    console.log('button clicked', e.target);

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      // id: notes.length + 1, //better to let server generate IDs
    };

    axios.post('http://localhost:3001/notes', noteObject).then((res) => {
      setNotes(notes.concat(res.data));
      setNewNote('');
    });
  };

  const noteChangeHandler = (e) => {
    setNewNote(e.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNoteHandler}>
        <input value={newNote} onChange={noteChangeHandler} />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
