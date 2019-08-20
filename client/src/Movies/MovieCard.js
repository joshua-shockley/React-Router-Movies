import React from 'react';
import MovieList from './MovieList.js';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return (
    <>
        <Link  to={`/Movies/${id}`} ><MovieList/></Link>
    </>

  );
};

export default MovieCard;
