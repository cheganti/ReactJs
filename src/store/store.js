import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieContainerReducer from '../components/MovieContainer/MovieContainerReducer';

const store = createStore(movieContainerReducer, applyMiddleware(thunk));

export default store;
