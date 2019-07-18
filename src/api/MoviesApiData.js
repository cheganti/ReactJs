const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies/';
const MoviesApiData = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  return data;
};

export default MoviesApiData;
