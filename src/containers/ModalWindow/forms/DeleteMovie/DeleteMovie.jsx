import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../components/Button';
import {MockOnClick} from '../../../../mocks/mockData';

const DeleteMovie = ({title, movie}) => (
  <>
    <span className="title">{title}</span>
    <form onSubmit={() => MockOnClick('form onSubmit', movie)}>
      <div className="formInput">
        <h1 className="content">Are you sure you want to delete this movie?</h1>
      </div>
      <div className="modalFooter">
        <Button
          type="submit"
          className="button"
          title="CONFIRM"
        />
      </div>
    </form>
  </>
	  );

DeleteMovie.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};

export default DeleteMovie;
