import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import ErrorBoundary from './ErrorsBoundary/ErrorBoundary';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>
);

export default App;
