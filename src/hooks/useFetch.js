import { useState } from 'react';
import { Status } from '../constants/fetch-status';

export const useFetch = (callback) => {
  const [status, setStatus] = useState(Status.Idle);

  const fetchData = async (params) => {
    setStatus(Status.Loading);
    try {
      await callback(params);
      setStatus(Status.Success);
    } catch {
      setStatus(Status.Error);
    }
  };

  return { fetchData, status };
};
