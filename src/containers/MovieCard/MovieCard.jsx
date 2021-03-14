import './MovieCard.less';

import PropTypes from 'prop-types';
import React, {useContext, useState} from 'react';

import Button from '../../components/Button';
import ItemGenre from '../../components/ItemGenre';
import ItemReleaseDate from '../../components/ItemReleaseDate';
import ItemTitle from '../../components/ItemTitle';
import MovieContext from '../../context';
import threeDotsIconLink from '../../img/moreButton.svg';
import noImage from '../../img/no-image.png';
import MovieCardMenu from '../MovieCardMenu';

const MovieCard = ({movie}) => {
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
      <Button className="imageButton" onClick={showMovieDetailsWindow}>
        <img src={movie.movieURL || noImage} alt="item" className="imageItem" />
      </Button>
      <Button className="threeDotsIcon" onClick={showMovieCardSubMenu}>
        <img src={threeDotsIconLink} alt="movie button" />
      </Button>
      <MovieCardMenu
        showSubMenu={showSubMenu}
        closeSubMenu={closeMovieCardSubMenu}
        showEditMovieWindow={showEditMovieWindow}
        showDeleteMovieWindow={showDeleteMovieWindow}
      />
      <div className="descriptionContainer">
        <ItemTitle name={movie.name} />
        <ItemReleaseDate year={new Date(movie.releaseDate).getFullYear()} />
      </div>
      <ItemGenre genre={movie.genre} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieURL: PropTypes.string,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number
  }).isRequired
};

export default MovieCard;
