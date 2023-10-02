import React, { useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const addNote = () => {
    if (newNote.trim() === '') {
      return;
    }
    const newNoteObj = { text: newNote, color: selectedColor };
    setNotes([...notes, newNoteObj]);
    setNewNote('');
  };

  return (
    <div>
      <h2>Notes</h2>
      <input
        type="text"
        placeholder="Add a new note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <select onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <button onClick={addNote}>Add</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ color: note.color }}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
