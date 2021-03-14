import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import Button from '../../../../components/Button';
import MovieContext from '../../../../context';
import {MockOnClick} from '../../../../mocks/mockData';

const DeleteMovie = ({title, movie}) => {
  const {activeModalWindow} = useContext(MovieContext);

  return (
    <>
      {activeModalWindow === 'deleteMovie' && (
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
      )}
    </>
  );
};

DeleteMovie.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    movieURL: PropTypes.string,
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number
  })
};

DeleteMovie.defaultProps = {
  movie: null
};

export default DeleteMovie;
