import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieContainer from './components/MovieContainer/MovieContainer';
import Movie from './components/Movie/Movie';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MovieContainer} />
      <Route path="/movie/:id" component={Movie} />
    </Switch>
  </Router>
);

export default Routes;
