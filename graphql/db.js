import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let REQ_URL = API_URL;

  if (limit) {
    REQ_URL += `limit=${limit}`;
  }
  if (rating) {
    REQ_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQ_URL)
    .then((res) => res.json())
    .then((res) => res.data.movies);
};
