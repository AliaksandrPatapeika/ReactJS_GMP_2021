import './MovieDetailsContent.less';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import noImage from '../../img/noImage.png';
import {addDefaultSrc} from '../../utils';

const MovieDetailsContent = () => {
  const activeMovieDetailsMovie = useSelector((state) => state.movie.activeMovieDetailsMovie);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeMovieDetailsMovie]);

  const {
    poster_path, title, vote_average, tagline, release_date, runtime, overview
  } = activeMovieDetailsMovie;

  return (
    <div className="movieDetailsContentContainer">
      <img
        src={poster_path || noImage}
        onError={addDefaultSrc}
        alt="movie details poster"
        className="movieDetailsPoster"
      />
      <div className="movieDetailsContent">
        <div className="movieDetailsTitleRating">
          <span className="movieDetailsTitle">{title}</span>
          <div className="movieDetailsRating">{vote_average || '-'}</div>
        </div>
        <div>{tagline || 'No tagline'}</div>
        <div className="movieDetailsReleaseDateRuntime">
          <div>{new Date(release_date).getFullYear()}</div>
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
