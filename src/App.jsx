import React from 'react';
import { ConfettiContainer } from './components/Confetti/Confetti';
import { Counter } from './components/Counter';
import { Header, Layout } from './components/Layout';
import { Timer } from './components/Timer/Timer';
// import { Posts } from './components/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title='Hello world!' />
      {/* <Posts /> */}
      <Timer />
      <Counter />

      <ConfettiContainer />
    </Layout>
  );
};
