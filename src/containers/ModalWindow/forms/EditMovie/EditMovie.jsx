import '../../ModalWindow.less';

import axios from 'axios';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catchError} from '../../../../actions/movies';
import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import {Genres} from '../../../../constants';
import {URL} from '../../../../constants/constants';
import {convertMovieData, getGenres} from '../../../../utils';

const EditMovie = ({
  formTitle,
  movie: {
    budget,
    genres,
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  }
}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();
  const [movieData, setMovieData] = useState({
    budget,
    genres: getGenres(Genres, genres),
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  });

  const selectChange = (selected) => {
    setMovieData({...movieData, genres: selected});
  };

  const selectReset = () => {
    setMovieData({...movieData, genres: getGenres(Genres, genres)});
  };

  const onInputChangeHandler = (event) => {
    setMovieData({...movieData, [event.target.name]: event.target.value});
  };

  const onSubmitHandler = async () => {
    const payload = {
      ...movieData,
      ...convertMovieData(movieData)
    };

    try {
      await axios.put(URL, payload);
    } catch (error) {
      dispatch(catchError(error.message));
    }
  };

  return activeModalWindow === 'editMovie' && (
  <>
    <span className="title">{formTitle}</span>
    <form onSubmit={onSubmitHandler} onReset={selectReset}>
      <div className="formInput">
        <label htmlFor="id" className="label">
          MOVIE ID
        </label>
        <input
          type="text"
          name="id"
          id="id"
          className="input"
          value={id}
          readOnly
        />
      </div>
      <div className="formInput">
        <label htmlFor="title" className="label required-label">
          TITLE
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="input"
          placeholder="Title here"
          defaultValue={title}
          onChange={onInputChangeHandler}
          autoComplete="off"
          required
        />
      </div>
      <div className="formInput">
        <label htmlFor="release_date" className="label required-label">
          RELEASE DATE
        </label>
        <input
          type="date"
          name="release_date"
          id="release_date"
          className="input"
          placeholder="Select Date"
          defaultValue={release_date}
          onChange={onInputChangeHandler}
          required
        />
      </div>
      <div className="formInput">
        <label htmlFor="poster_path" className="label">
          MOVIE URL
        </label>
        <input
          type="url"
          name="poster_path"
          id="poster_path"
          className="input"
          placeholder="Movie URL here"
          defaultValue={poster_path}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="formInput">
        <label htmlFor="genres" className="label required-label">
          GENRE
        </label>
        <Select
          className="select"
          classNamePrefix="select"
          id="genres"
          options={Genres}
          placeholder="Select Genre"
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          onChange={selectChange}
          allowSelectAll
          allSelectedLabel="All genres"
          value={movieData.genres}
          required
        />
      </div>
      <div className="formInput">
        <label htmlFor="overview" className="label required-label">
          OVERVIEW
        </label>
        <input
          type="text"
          name="overview"
          id="overview"
          className="input"
          placeholder="Overview here"
          defaultValue={overview}
          onChange={onInputChangeHandler}
          autoComplete="off"
          required
        />
      </div>
      <div className="formInput">
        <label htmlFor="runtime" className="label">
          RUNTIME
        </label>
        <input
          type="number"
          name="runtime"
          id="runtime"
          className="input"
          placeholder="Runtime here"
          defaultValue={runtime}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="formInput">
        <label htmlFor="budget" className="label">
          BUDGET
        </label>
        <input
          type="number"
          name="budget"
          id="budget"
          className="input"
          placeholder="Budget here"
          defaultValue={budget}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="formInput">
        <label htmlFor="revenue" className="label">
          REVENUE
        </label>
        <input
          type="number"
          name="revenue"
          id="revenue"
          className="input"
          placeholder="Revenue here"
          defaultValue={revenue}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="formInput">
        <label htmlFor="tagline" className="label required-label">
          TAGLINE
        </label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          className="input"
          placeholder="Tagline here"
          defaultValue={tagline}
          onChange={onInputChangeHandler}
          autoComplete="off"
          required
        />
      </div>
      <div className="formInput">
        <label htmlFor="vote_average" className="label">
          VOTE AVERAGE
        </label>
        <input
          type="number"
          step="0.1"
          name="vote_average"
          id="vote_average"
          className="input"
          placeholder="Vote average here"
          defaultValue={vote_average}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="formInput">
        <label htmlFor="vote_count" className="label">
          VOTE COUNT
        </label>
        <input
          type="number"
          name="vote_count"
          id="vote_count"
          className="input"
          placeholder="Vote count here"
          defaultValue={vote_count}
          onChange={onInputChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="modalFooter">
        <Button
          type="reset"
          className="button"
          title="RESET"
        />
        <Button
          type="submit"
          className="button"
          title="SAVE"
        />
      </div>
    </form>
  </>
  );
};

EditMovie.propTypes = {
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
  }).isRequired
};

export default EditMovie;
