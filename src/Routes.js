import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import MovieContainer from './components/MovieContainer';
import Movie from './components/Movie';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MovieContainer} />
      <Route path="/movie/:id" component={Movie} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
