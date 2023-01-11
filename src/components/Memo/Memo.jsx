import React from 'react';
// import { Button } from '../Button';

const cache = {};

const sum = (a, b) => {
  const key = JSON.stringify({ a, b }); // "{a: 2, b: 2}"

  if (cache[key]) {
    console.log('from cache: ', cache[key]);

    return cache[key];
  }

  const result = a + b;
  cache[key] = result;
  console.log('calculated: ', result);

  return result;
};

export const Memo = () => {
  return (
    <div className='mb-5'>
      <button className='btn btn-primary me-3' onClick={() => sum(2, 2)}>
        2 + 2
      </button>
      <button className='btn btn-primary me-3' onClick={() => sum(2, 3)}>
        2 + 3
      </button>
      <button className='btn btn-primary me-3' onClick={() => sum(2, 4)}>
        2 + 4
      </button>
    </div>
  );
};
