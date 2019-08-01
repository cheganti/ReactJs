import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { ErrorBoundary } from './ErrorsBoundary/ErrorBoundary';
import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>
);
export default App;
