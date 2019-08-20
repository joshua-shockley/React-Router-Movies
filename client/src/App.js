import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie.js';


const App = () => {
  // const theMovies = props.movies.find(movies => props.match.params.id === `${movies.id}`);


  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>

        <Route
          exact path="/"
          component={MovieList}
        />
        <Route path="/movies/:id"
          render={props => (<Movie {...props} />)} />
      </div>
    </div>
  );
};

export default App;
