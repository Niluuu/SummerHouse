export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

function fetchMoviesPending() {
  return {
    type: FETCH_MOVIES_PENDING
  };
}

function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies
  };
}

function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error: error
  };
}

export function fetchMovies() {
  return dispatch => {
    dispatch(fetchMoviesPending());
    fetch(`"https://deezerdevs-deezer.p.rapidapi.com/search"`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMoviesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      });
  };
}
