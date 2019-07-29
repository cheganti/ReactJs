import React from 'react';
import { ErrorBoundary } from './ErrorsBoundary/ErrorBoundary';
import Routes from './Routes';

const App = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);
export default App;
