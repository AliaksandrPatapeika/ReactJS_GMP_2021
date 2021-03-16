import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React, {useContext} from 'react';

import Button from '../../../../components/Button';
import MovieContext from '../../../../context';
import {MockOnClick} from '../../../../mocks/mockData';

const DeleteMovie = ({formTitle, movie}) => {
  const {activeModalWindow} = useContext(MovieContext);

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
