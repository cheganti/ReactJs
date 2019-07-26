const REQUEST_API_DATA = 'REQUEST_API_DATA';
const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
const CLICK_REQUEST_DATA = 'CLICK_REQUEST_DATA';

const requestApiData = requestMoviesResponse => ({ type: REQUEST_API_DATA, requestMoviesResponse });
const receiveApiData = receiveMoviesResponse => ({ type: RECEIVE_API_DATA, receiveMoviesResponse });
const clickStoreData = params => ({ type: CLICK_REQUEST_DATA, params });

export {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  CLICK_REQUEST_DATA,
  requestApiData,
  receiveApiData,
  clickStoreData,
};