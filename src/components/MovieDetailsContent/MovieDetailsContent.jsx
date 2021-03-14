import './MovieDetailsContent.less';

import React, {useContext, useEffect} from 'react';

import MovieContext from '../../context';
import noImage from '../../img/no-image.png';

const MovieDetailsContent = () => {
  const {activeMovieDetailsMovie} = useContext(MovieContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeMovieDetailsMovie]);

  const {
    movieURL, name, rating, genre, releaseDate, runtime, overview
  } = activeMovieDetailsMovie;

  return (
    <div className="movieDetailsContentContainer">
      <img src={movieURL || noImage} alt="movie details" className="movieDetailsImage" />
      <div className="movieDetailsContent">
        <div className="movieDetailsNameRating">
          <span className="movieDetailsName">{name}</span>
          <div className="movieDetailsRating">{rating || '-'}</div>
        </div>
        <div>{genre || 'No genre'}</div>
        <div className="movieDetailsDurationRelease">
          <div>{new Date(releaseDate).getFullYear()}</div>
          <div>
            {runtime || 0}
            {' '}
            min
          </div>
        </div>
        <div>{overview || 'No overview'}</div>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
