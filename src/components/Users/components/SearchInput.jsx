/* eslint-disable */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchAction } from "../../../redux/users/slice.users";
export const SearchInput = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch()

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmitSearch = () => {
    dispatch(changeSearchAction(search));
  };

  const handleResetSearch = () => {
    setSearch('');
    dispatch(changeSearchAction(''));
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
      <button className='btn btn-outline-primary' type='button' onClick={handleSubmitSearch}>
        Search
      </button>
      <button className='btn btn-outline-secondary' type='button' onClick={handleResetSearch}>
        Reset
      </button>
    </div>
  );
};
