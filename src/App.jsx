import React from 'react';
import { ConfettiContainer } from './components/Confetti/Confetti';
import { Layout } from './components/Layout';
// import { Counter } from './components/Counter';
// import { Timer } from './components/Timer/Timer';
// import { Posts } from './components/Posts';
import { AuthProvider } from './context/AuthContext';
// import { Users } from './components/Users/Users';
import { Rerender } from './components/Rerender/Rerender';
// import { Memo } from './components/Memo/Memo';

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        {/* <Memo /> */}
        <Rerender />
        {/* <Users /> */}
        {/* <Posts /> */}
        {/* <Timer />
      <Counter /> */}

        <ConfettiContainer />
      </Layout>
    </AuthProvider>
  );
};
