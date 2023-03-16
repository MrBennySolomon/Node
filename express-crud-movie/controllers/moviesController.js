const moviesJson = JSON.stringify(require('../DB/db.json'));
const fs = require("fs");

//@desc Get all movies
//@route GET /movies
//@access public
const getAllMovies = (req, res) => {
  res.status(200).json(moviesJson);
};

//@desc Create new movie
//@route POST /movies
//@access public
const createMovie = (req, res) => {
  const movies = JSON.parse(moviesJson);
  movies.push({
    Title:        req.params.Title,
    Year:         req.params.Year,
    Rated:        req.params.Rated,
    Released:     req.params.Released,
    Runtime:      req.params.Runtime,
    Genre:        req.params.Genre,
    Director:     req.params.Director,
    Writer:       req.params.Writer,
    Actors:       req.params.Actors,
    Plot:         req.params.Plot,
    Language:     req.params.Language,
    Country:      req.params.Country,
    Awards:       req.params.Awards,
    Poster:       req.params.Poster,
    Metascore:    req.params.Metascore,
    imdbRating:   req.params.imdbRating,
    imdbVotes:    req.params.imdbVotes,
    imdbID:       req.params.imdbID,
    Type:         req.params.Type,
    totalSeasons: req.params.totalSeasons,
    Response:     req.params.Response,
    Images:       req.params.Images
  });
  fs.writeFileSync('../DB/db.json', JSON.stringify(movies));
  res.status(201).json({message: "Movie Added To DB"})
};

//@desc Get movie
//@route GET /movies/:id
//@access public
const getMovie = (req, res) => 
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => mov.id === req.params.id);
  res.status(200).json({message: `${JSON.stringify(movie)}`});
};

//@desc Update movie
//@route PUT /movies/:id
//@access public
const updateMovie = (req, res) => {
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => mov.id === req.params.id);
  const updatedMovie = {
    Title:        req.params.Title,
    Year:         req.params.Year,
    Rated:        req.params.Rated,
    Released:     req.params.Released,
    Runtime:      req.params.Runtime,
    Genre:        req.params.Genre,
    Director:     req.params.Director,
    Writer:       req.params.Writer,
    Actors:       req.params.Actors,
    Plot:         req.params.Plot,
    Language:     req.params.Language,
    Country:      req.params.Country,
    Awards:       req.params.Awards,
    Poster:       req.params.Poster,
    Metascore:    req.params.Metascore,
    imdbRating:   req.params.imdbRating,
    imdbVotes:    req.params.imdbVotes,
    imdbID:       req.params.imdbID,
    Type:         req.params.Type,
    totalSeasons: req.params.totalSeasons,
    Response:     req.params.Response,
    Images:       req.params.Images
  }
  const filteredMovies = movies.filter((mov) => mov.id !== req.params.id);
  filteredMovies.push(updatedMovie);
  fs.writeFileSync('../DB/db.json', JSON.stringify(filteredMovies));
  res.status(200).json({message: `Update Movie :  ${JSON.stringify(movie)}`})
};

//@desc Delete movie
//@route DELETE /movies/:id
//@access public
const deleteMovie = (req, res) => {
  const movies = JSON.parse(moviesJson);
  const movie = movies.find((mov) => mov.id === req.params.id);
  const filteredMovies = movies.filter((mov) => mov.id !== req.params.id);
  fs.writeFileSync('../DB/db.json', JSON.stringify(filteredMovies));
  res.status(200).json({message: `Delete Movie ${JSON.stringify(movie)}`})
};

module.exports = 
{ getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie
};