import React from 'react';
import { getMovies } from '../../services/movies.services';
import MovieCard from './MovieCard';

 function MoviesList() {
  const movies =  getMovies();

  return (
    <div>
      <MovieCard movie={movies}></MovieCard>{' '}
    </div>
  );
}

export default MoviesList;
