import React from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieContainer from './components/MovieContainer/MovieContainer';
import { ErrorBoundary } from './ErrorsBoundary/ErrorBoundary';
import store from './store/store';


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <ErrorBoundary>
          <MovieContainer />
        </ErrorBoundary>
      </Switch>
    </Router>
  </Provider>
);

export default App;
