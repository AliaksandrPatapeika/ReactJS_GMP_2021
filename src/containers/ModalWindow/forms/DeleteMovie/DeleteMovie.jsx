import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catchError} from '../../../../actions/movies';
import Button from '../../../../components/Button';
import {BASE_URL} from '../../../../constants/constants';

const DeleteMovie = ({formTitle, movieId}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      await axios.delete(`${BASE_URL}/${movieId}`);
    } catch (error) {
      dispatch(catchError(error.message));
    }
  };

  return activeModalWindow === 'deleteMovie' && (
  <>
    <span className="title">{formTitle}</span>
    <form onSubmit={onSubmit}>
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
};

DeleteMovie.propTypes = {
  formTitle: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired
};

export default DeleteMovie;
