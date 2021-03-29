import './MovieDetailsContent.less';

import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import noImage from '../../img/noImage.png';
import {addDefaultSrc, delimiteredCost} from '../../utils';
import MovieDetailsLabel from '../MovieDetailsLabel';

const MovieDetailsContent = () => {
  const activeMovieDetailsMovie = useSelector((state) => state.movie.activeMovieDetailsMovie);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeMovieDetailsMovie]);

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    tagline,
    release_date,
    runtime,
    genres,
    budget,
    revenue,
    overview
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
          <div className="movieDetailsRating" title={`Vote count: ${vote_count}`}>
            {vote_average
						|| '-'}
          </div>
        </div>
        <div>{tagline || 'No tagline'}</div>
        <div className="movieDetailsReleaseDateRuntime">
          <div title={`Release date: ${release_date}`}>{new Date(release_date).getFullYear()}</div>
          <div>
            {runtime || 0}
            {' '}
            min
          </div>
        </div>
        <MovieDetailsLabel label="Genres" value={genres.join(', ')} />
        <MovieDetailsLabel label="Budget" value={delimiteredCost(budget)} />
        <MovieDetailsLabel label="Revenue" value={delimiteredCost(revenue)} />
        <div className="overview">{overview || 'No overview'}</div>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
