import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from '../components/MovieContainer/movieReducer';

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
