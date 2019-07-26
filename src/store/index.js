
import {
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MovieContainerReducer from '../components/MovieContainer/MovieContainerReducer';
import MovieSearchReducer from '../components/MovieSearch/MovieSearchReducer';
import MovieSearchByTypeReducer from '../components/MovieSearchByType/MovieSearchByTypeReducer';
import MovieSortingReducer from '../components/MovieSorting/MovieSortingReducer';
import MovieDetailedReducer from '../components/MovieDetailed/MovieDetailedReducer';
import sagaOutput from '../saga';

const allReducers = combineReducers({
  MovieContainerReducer,
  MovieSearchReducer,
  MovieSearchByTypeReducer,
  MovieSortingReducer,
  MovieDetailedReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
sagaMiddleware.run(sagaOutput);
export default store;
