import { useState, useEffect } from 'react';

import Note from './components/Note';
import Notification from './components/Notification';

import noteServices from './services/notes';

function Footer() {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2022
      </em>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
        // alert(`the note '${note.content}' was already deleted from server`);
        setErrorMessage(
          `Note '${note.content}' was already deleted from server`
        );
        // remove error message after 5 secs
        setTimeout(() => setErrorMessage(null), 5000);

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
      <Notification message={errorMessage} />
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
      <Footer />
    </div>
  );
}

export default App;
