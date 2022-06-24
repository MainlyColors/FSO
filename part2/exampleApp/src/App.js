import { useState } from 'react';

import Note from './components/Note';

function App({ notes: notesArr }) {
  const [notes, setNotes] = useState(notesArr);
  const [newNote, setNewNote] = useState('a new note...');

  const addNoteHandler = (e) => {
    e.preventDefault();
    console.log('button clicked', e.target);

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const noteChangeHandler = (e) => {
    console.log(e.target);
    setNewNote(e.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
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
