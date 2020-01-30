export const GET_MOVIE_PENDING = "GET_MOVIE_PENDING";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_ERROR = "GET_MOVIE_ERROR";

function getMoviePending() {
  return {
    type: GET_MOVIE_PENDING
  };
}

function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    movie: movie
  };
}

function getMovieError(error) {
  return {
    type: GET_MOVIE_ERROR,
    error: error
  };
}

export function getMovie(id) {
  return dispatch => {
    dispatch(getMoviePending());
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search"`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getMovieSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(getMovieError(error));
      });
  };
}
