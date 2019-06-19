import React, { Component } from 'react';

import { MovieSearch } from './Moviesearch/MovieSearch';
import {ErrorBoundary} from './ErrorsBoundary/ErrorBoundary'

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <MovieSearch />
        </ErrorBoundary>
      </div>
    )
  }
}
export default App;