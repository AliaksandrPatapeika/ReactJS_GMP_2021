import '../../ModalWindow.less';

import axios from 'axios';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catchError} from '../../../../actions/movies';
import Button from '../../../../components/Button';
import {URL} from '../../../../constants/constants';

const DeleteMovie = ({formTitle, movieId}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();

  const onSubmitHandler = async () => {
    try {
      await axios.delete(`${URL}/${movieId}`);
    } catch (error) {
      dispatch(catchError(error.message));
    }
  };

  return activeModalWindow === 'deleteMovie' && (
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
  );
};

DeleteMovie.propTypes = {
  formTitle: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired
};

export default DeleteMovie;
