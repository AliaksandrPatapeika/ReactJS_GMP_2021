import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deleteMovie} from '../../../../actions/movies';
import Button from '../../../../components/Button';

const DeleteMovie = ({formTitle, movieId}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <>
      {activeModalWindow === 'deleteMovie' && (
      <>
        <span className="title">{formTitle}</span>
        <form onSubmit={onSubmitHandler}>
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
  movieId: PropTypes.number.isRequired
};

export default DeleteMovie;
