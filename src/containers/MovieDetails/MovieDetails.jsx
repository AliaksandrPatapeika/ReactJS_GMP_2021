import './MovieDetails.less';

import React, {useContext} from 'react';

import Blur from '../../components/Blur';
import MovieDetailsContent from '../../components/MovieDetailsContent';
import MovieContext from '../../context';
import HeaderTop from '../HeaderTop/HeaderTop';

const MovieDetails = () => {
  const {activeMovieDetails} = useContext(MovieContext);

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
