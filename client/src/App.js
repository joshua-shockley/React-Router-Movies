import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
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
        component={props => <MovieList {...props} savedList={savedList}/>}
        />
        <Route path="/Movies/:id" 
      component={props => <MovieList {...props} savedList={savedList}/>}/>
        {/* Replace this Div with your Routes */}
      </div>
    </div>
  );
};

export default App;
