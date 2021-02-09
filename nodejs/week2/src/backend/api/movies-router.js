const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  console.log(request.query);
  const firstYear = Math.min(...movies.map(movie => movie.year));
  const lastYear = Math.max(...movies.map(movie => movie.year));
  const beginYear = parseInt(request.query.beginYear) > 0 ? request.query.beginYear : firstYear;
  const endYear = parseInt(request.query.endYear) > 0 ? request.query.endYear : lastYear;
  const minRating = parseFloat(request.query.minRating) > 0 ? request.query.minRating : 0;
  const filteredMovies = movies.filter(movie => movie.year >= beginYear && movie.year <= endYear && movie.rating >= minRating);
  response.send({ data: filteredMovies });
});

router.get("/:year", async (request, response) => {
  console.log(request.params.year);
  const moviesInThatYear = movies.filter(movie => movie.year === parseInt(request.params.year));
  response.send({ data: moviesInThatYear });
});

module.exports = router;
