import React, { useState } from 'react';
import './App.css';
import Notes from './Notes';
import Filter from './Filter';

function App() {
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleFilter = (filter) => {
    if (filter.trim() === '') {
      setFilteredNotes([]);
    } else {
      const filteredNotes = Notes.filter((note) =>
        note.text.includes(filter)
      );
      setFilteredNotes(filteredNotes);
    }
  };

  return (
    <div className="App">
      <Notes />
      <Filter notes={Notes} onFilter={handleFilter} />
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index} style={{ color: note.color , borderColor: note.color}}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;