import './MovieCard.less';

import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../../components/Button';
import ItemGenre from '../../components/ItemGenre';
import ItemImage from '../../components/ItemImage';
import ItemReleaseDate from '../../components/ItemReleaseDate';
import ItemTitle from '../../components/ItemTitle';
import ModalWindowContext from '../../context';
import threeDotsIconLink from '../../img/moreButton.svg';
import MovieCardMenu from '../MovieCardMenu';

class MovieCard extends Component {
	state = {
	  showSubMenu: false
	};

	componentDidUpdate() {
	  const {showSubMenu} = this.state;

	  if (showSubMenu) {
	    window.addEventListener('keydown', this.handleKeyDown);
	  } else {
	    window.removeEventListener('keydown', this.handleKeyDown);
	  }
	}

	componentWillUnmount() {
	  window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = (event) => {
	  if (event.key === 'Escape') {
	    this.closeSubMenu();
	  }
	}

	showSubMenu = () => {
	  this.setState({
	    showSubMenu: true
	  });
	}

	closeSubMenu = () => {
	  this.setState({
	    showSubMenu: false
	  });
	}

	showEditWindow = () => {
	  const {movie} = this.props;
	  const {showModalWindow} = this.context;

	  this.closeSubMenu();
	  showModalWindow('editMovie', movie);
	}

	showDeleteWindow = () => {
	  const {movie} = this.props;
	  const {showModalWindow} = this.context;

	  this.closeSubMenu();
	  showModalWindow('deleteMovie', movie);
	}

	render() {
	  const {showSubMenu} = this.state;
	  const {
	    movie: {
	      url, description, releaseDate, genre
	    }
	  } = this.props;

	  return (
  <div className="movieCardContainer">
    <ItemImage url={url} />
    <Button className="threeDotsIcon" onClick={this.showSubMenu}>
      <img src={threeDotsIconLink} alt="MovieButton" />
    </Button>
    {showSubMenu && (
    <MovieCardMenu
      closeSubMenu={this.closeSubMenu}
      showEditWindow={this.showEditWindow}
      showDeleteWindow={this.showDeleteWindow}
    />
    )}
    <div className="descriptionContainer">
      <ItemTitle description={description} />
      <ItemReleaseDate releaseDate={releaseDate.slice(0, 4)} />
    </div>
    <ItemGenre genre={genre} />
  </div>
	  );
	}
}

MovieCard.contextType = ModalWindowContext;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};

export default MovieCard;
