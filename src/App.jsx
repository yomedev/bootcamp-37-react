import React from 'react';
import { ConfettiContainer } from './components/Confetti/Confetti';
import { Header, Layout } from './components/Layout';
import { Posts } from './components/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title='Hello world!' />
      <Posts />

      <ConfettiContainer />
    </Layout>
  );
};
