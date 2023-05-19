import AppProviders from './appProviders/AppProviders';
import Routing from './routing';
import AppLayout from './Layout/AppLayout';

const App = () => {
  return (
    <AppProviders>
      <AppLayout>
        <Routing />
      </AppLayout>
    </AppProviders>
  );
};

export default App;
