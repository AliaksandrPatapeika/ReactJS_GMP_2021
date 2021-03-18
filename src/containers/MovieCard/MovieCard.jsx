import './MovieCard.less';

import PropTypes from 'prop-types';
import React, {useContext, useState} from 'react';

import Button from '../../components/Button';
import MovieGenres from '../../components/MovieGenres';
import MovieReleaseDate from '../../components/MovieReleaseDate';
import MovieTitle from '../../components/MovieTitle';
import MovieContext from '../../context';
import threeDotsIconLink from '../../img/moreButton.svg';
import noImage from '../../img/no-image.png';
import {addDefaultSrc} from '../../utils';
import MovieCardMenu from '../MovieCardMenu';

const MovieCard = ({
  movie,
  movie: {
    poster_path, title, release_date, genres
  }
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const {showModalWindow, showMovieDetails} = useContext(MovieContext);

  const showMovieDetailsWindow = () => {
    showMovieDetails(movie);
  };

  const showMovieCardSubMenu = () => {
    setShowSubMenu(true);
  };

  const closeMovieCardSubMenu = () => {
    setShowSubMenu(false);
  };

  const showEditMovieWindow = () => {
    showModalWindow('editMovie', movie);
  };

  const showDeleteMovieWindow = () => {
    showModalWindow('deleteMovie', movie);
  };

  return (
    <div
      className="movieCardContainer"
      onMouseLeave={closeMovieCardSubMenu}
    >
      <Button className="posterButton" onClick={showMovieDetailsWindow}>
        <img
          src={poster_path || noImage}
          onError={addDefaultSrc}
          alt="movie card poster"
          className="movieCardPoster"
        />
      </Button>
      <Button className="threeDotsIcon" onClick={showMovieCardSubMenu}>
        <img src={threeDotsIconLink} alt="movie card menu" />
      </Button>
      <MovieCardMenu
        showSubMenu={showSubMenu}
        closeSubMenu={closeMovieCardSubMenu}
        showEditMovieWindow={showEditMovieWindow}
        showDeleteMovieWindow={showDeleteMovieWindow}
      />
      <div className="movieTitleReleaseDateContainer">
        <MovieTitle title={title} />
        <MovieReleaseDate year={new Date(release_date).getFullYear()} />
      </div>
      <MovieGenres genres={genres.join(', ')} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  })
};

MovieCard.defaultProps = {
  movie: null
};

export default MovieCard;
