import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectAuth } from '../../redux/auth/selector.auth';

export const PublicRoute = () => {
  const { access_token } = useSelector(selectAuth);
  const location = useLocation()
  console.log(location);
  return !access_token ? <Outlet /> : <Navigate to={location.state?.fromLogin ?? '/posts'} />;
};
