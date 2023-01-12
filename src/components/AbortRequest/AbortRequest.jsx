import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Status } from '../../constants/fetch-status';

export const AbortRequest = () => {
  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(Status.Idle);
  const controllerRef = useRef(null);

  const handleAbort = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null
    }
  }, []);

  useEffect(() => {
    return handleAbort;
  }, [handleAbort]);

  const handleRequest = async () => {
    setStatus(Status.Loading);
    try {
      controllerRef.current = new AbortController();
      const { data } = await axios.get('http://70.34.201.18:8080/posts', {
        signal: controllerRef.current.signal,
      });
      setPosts(data);
      setStatus(Status.Success);
    } catch (error) {
      console.log(error);
      setStatus(Status.Error);
    }
  };

  return (
    <div className='my-5'>
      <button className='btn btn-primary me-3' onClick={handleRequest}>
        Request
      </button>
      <button className='btn btn-danger' onClick={handleAbort}>
        Abort
      </button>
      {status === Status.Loading ? <p>Loading...</p> : <p>{JSON.stringify(posts)}</p>}
    </div>
  );
};
