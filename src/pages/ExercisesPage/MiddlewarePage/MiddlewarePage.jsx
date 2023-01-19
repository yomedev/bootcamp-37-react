import React from 'react';
import { useDispatch } from 'react-redux';
import { getPostsThunk } from '../../../redux/store';

export const MiddlewarePage = () => {
  const dispatch = useDispatch(); 
  return (
    <button className='btn btn-primary' onClick={() => dispatch(getPostsThunk())}>
      Get posts
    </button>
  );
};
