import './MovieDetails.less';

import React from 'react';
import {useSelector} from 'react-redux';

import Blur from '../../components/Blur';
import MovieDetailsContent from '../../components/MovieDetailsContent';
import HeaderTop from '../HeaderTop/HeaderTop';

const MovieDetails = () => {
  const activeMovieDetails = useSelector((state) => state.movie.activeMovieDetails);

  return (
    <>
      {activeMovieDetails && (
      <div className="headerContainer movieDetailsContainer">
        <Blur>
          <HeaderTop />
          <MovieDetailsContent />
        </Blur>
      </div>
      )}
    </>
  );
};

export default MovieDetails;
