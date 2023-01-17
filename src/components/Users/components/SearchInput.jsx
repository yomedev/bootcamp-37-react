/* eslint-disable */
import { useState } from "react";
export const SearchInput = ({ onSubmitSearch }) => {
  const [search, setSearch] = useState('');
  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleResetSearch = () => {
    setSearch('');
    onSubmitSearch('')
  };

  return (
    <div className='input-group input-group-lg mb-5'>
      <input
        type='text'
        value={search}
        onChange={handleChangeSearch}
        className='form-control'
        placeholder='Type to search ...'
      />
      <button className='btn btn-outline-primary' type='button' onClick={() => onSubmitSearch(search)}>
        Search
      </button>
      <button className='btn btn-outline-secondary' type='button' onClick={handleResetSearch}>
        Reset
      </button>
    </div>
  );
};
