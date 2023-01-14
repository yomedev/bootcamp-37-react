import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import ExercisesPage from './pages/ExercisesPage';
import PostsListPage from './pages/PostsListPage';
import SinglePostPage from './pages/SinglePostPage';
import CommentsPage from './pages/SinglePostPage/CommentsPage';
import TimerPage from './pages/ExercisesPage/TimerPage';
import CancelRequest from './pages/ExercisesPage/CancelRequest';
import CounterPage from './pages/ExercisesPage/CounterPage';
import RerenderPage from './pages/ExercisesPage/RerenderPage';
import NotFoundPage from './pages/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter basename='/bootcamp-react/'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='posts' element={<PostsListPage />} />
          <Route path='posts/:postId' element={<SinglePostPage />}>
            <Route path='comments' element={<CommentsPage />} />
          </Route>
          <Route path='new-post' element={<NewPostPage />} />
          <Route path='exercises' element={<ExercisesPage />}>
            <Route index element={<Navigate to='timer' />} />
            <Route path='timer' element={<TimerPage />} />
            <Route path='cancel-request' element={<CancelRequest />} />
            <Route path='counter' element={<CounterPage />} />
            <Route path='re-render' element={<RerenderPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
