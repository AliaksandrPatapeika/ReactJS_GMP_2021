import '../less/containers/MovieCard.less';

import PropTypes from 'prop-types';
import React, {useState} from 'react';

import ItemGenre from '../components/ItemGenre';
import ItemImage from '../components/ItemImage';
import ItemReleaseDate from '../components/ItemReleaseDate';
import ItemTitle from '../components/ItemTitle';
import ThreeDotsIcon from '../components/ThreeDotsIcon';
import MovieCardMenu from './MovieCardMenu';

const MovieCard = ({movie}) => {
  const [showModel, setShowModel] = useState(false);

  function toggleMenu() {
    setShowModel(!showModel);
  }

  return (
    <div className="movieCardContainer">
      <ItemImage url={movie.url} />
      <ThreeDotsIcon toggleMenu={toggleMenu} />
      {showModel && (
      <MovieCardMenu toggleMenu={toggleMenu} />
      )}
      <div className="descriptionContainer">
        <ItemTitle description={movie.description} />
        <ItemReleaseDate year={movie.year} />
      </div>
      <ItemGenre genre={movie.genre} />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
