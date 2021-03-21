import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';

import Button from '../../../../components/Button';
import {MockOnClick} from '../../../../tests/mocks/mockData';

const DeleteMovie = ({formTitle, movie}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);

  return (
    <>
      {activeModalWindow === 'deleteMovie' && (
      <>
        <span className="title">{formTitle}</span>
        <form onSubmit={() => MockOnClick('form Delete movie onSubmit movie.id', movie.id)}>
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
  formTitle: PropTypes.string.isRequired,
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

DeleteMovie.defaultProps = {
  movie: null
};

export default DeleteMovie;
