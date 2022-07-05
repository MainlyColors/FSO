import { useState, useEffect } from 'react';

import Note from './components/Note';

import noteServices from './services/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    noteServices.getAll().then((initialNotes) => {
      setNotes(initialNotes);
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

    noteServices.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote.data));
      setNewNote('');
    });
  };

  const noteChangeHandler = (e) => {
    setNewNote(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changeNote = { ...note, important: !note.important };

    noteServices
      .update(id, changeNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id)); // note not on server so remove from DOM
      });

    console.log('importance of ' + id + ' needs to be toggled');
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
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
