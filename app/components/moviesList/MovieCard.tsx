import { Card } from '@mui/material';
import React from 'react';

interface Props {
  movie: any;
}

function MovieCard({ movie }: Props) {
  return (
    <div>
      <Card>{movie.title}</Card>
    </div>
  );
}

export default MovieCard;
