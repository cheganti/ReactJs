const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies/';
export const fetchSingleMovieData = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}${id}`);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
