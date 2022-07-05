function Note({ note, toggleImportance }) {
  const label = note.important ? 'make not important' : 'make important';

  const importantStyle = {
    backgroundColor: 'lightgreen',
  };

  return (
    <li>
      {note.content}
      <button
        style={note.important ? importantStyle : {}}
        onClick={toggleImportance}
      >
        {label}
      </button>
    </li>
  );
}

export default Note;
