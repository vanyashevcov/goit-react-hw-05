import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTBjMTE4MmE0OGE2N2NlMjg3NzFmMDJlY2UyMjM4ZCIsIm5iZiI6MTc0MTQ1NzM5NS4wNCwic3ViIjoiNjdjYzg3ZjMyZmU3MWI4YzQ1ZjVhZTBkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.VKegzU_4cN001om-C41ZVZZdkd7p529EjmlXgfO5R1k",
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    "3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `3/search/movie?query=${query.query}&include_adult=true&language=en-US&page=1`,
    options
  );

  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}?language=en-US`,
    options
  );
  console.log(data);

  return data;
};

export const fetchCastByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return data.cast;
};

export const fetchReviewsByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return data.results;
};
