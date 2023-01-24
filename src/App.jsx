import React, { lazy } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
// import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import ExercisesPage from './pages/ExercisesPage';
// import PostsListPage from './pages/PostsListPage';
import SinglePostPage from './pages/SinglePostPage';
import CommentsPage from './pages/SinglePostPage/CommentsPage';
// import TimerPage from './pages/ExercisesPage/TimerPage';
import CancelRequest from './pages/ExercisesPage/CancelRequest';
import CounterPage from './pages/ExercisesPage/CounterPage';
import RerenderPage from './pages/ExercisesPage/RerenderPage';
import NotFoundPage from './pages/NotFoundPage';
import { Users } from './components/Users/Users';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from './redux/profile/thunk.profile';
import { selectAuth } from './redux/auth/selector.auth';
import { Status } from './constants/fetch-status';

// const HomePage = lazy(() =>
//   import('./pages/HomePage').then((module) => ({ default: module.HomePage })),
// );
const HomePage = lazy(() => import('./pages/HomePage'));
const PostListPage = lazy(() => import('./pages/PostsListPage'));
const TimerPage = lazy(() => import('./pages/ExercisesPage/TimerPage'));

export const App = () => {
  const { status } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.Success) {
      dispatch(getProfileThunk());
    }
  }, [dispatch, status]);

  return (
    <BrowserRouter basename='/bootcamp-react/'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='join' element={<JoinPage />} />
          <Route path='posts' element={<PostListPage />} />
          <Route path='posts/:postId' element={<SinglePostPage />}>
            <Route path='comments' element={<CommentsPage />} />
          </Route>
          <Route path='new-post' element={<NewPostPage />} />
          <Route path='exercises' element={<ExercisesPage />}>
            <Route index element={<Navigate to='timer' />} />
            <Route path='timer' element={<TimerPage />} />
            <Route path='cancel-request' element={<CancelRequest />} />
            <Route path='counter' element={<CounterPage />} />
            <Route path='users' element={<Users />} />
            <Route path='re-render' element={<RerenderPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>
    </BrowserRouter>
  );
};
