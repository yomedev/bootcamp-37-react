import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../../Button';

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const queryParams = Object.fromEntries([...searchParams]);

  const [value, setValue] = useState(search);
  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ ...queryParams, search: value, page: 1 });
  };

  return (
    <form className='input-group mb-3' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Type to search...'
        value={value}
        onChange={handleChange}
      />
      <Button type='submit'>Search</Button>
    </form>
  );
};
