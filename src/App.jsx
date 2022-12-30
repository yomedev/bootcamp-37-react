import { ConfettiContainer } from './components/Confetti/Confetti';
import { Header, Layout } from './components/Layout';
import { Users } from './components/Users';
// import { Timer } from './components/Timer';
import {Rerender} from './components/Rerender'

export const App = () => {
  return (
    <Layout>
      <Header title='Hello world!' />
      {/* <Timer /> */}
      {/* <Rerender /> */}
      <Users />

      <ConfettiContainer />
    </Layout>
  );
};
