const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies/';
const moviesData = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
export { moviesData };
