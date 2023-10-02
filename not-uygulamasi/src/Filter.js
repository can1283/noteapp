import React, { useState } from 'react';

const Filter = ({ notes, onFilter }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = () => {
    onFilter(filter);
  };

  return (
    <div>
      <h2>Filter Notes</h2>
      <input
        type="text"
        placeholder="Filter notes"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
