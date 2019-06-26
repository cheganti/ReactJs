import React, { Component } from 'react';
import MovieContainer from './components/MovieContainer/MovieContainer';
import { ErrorBoundary } from './ErrorsBoundary/ErrorBoundary'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MovieContainer />
      </ErrorBoundary>
    )
  }
}
export default App;