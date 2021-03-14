import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React, {useContext, useState} from 'react';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import {Genres} from '../../../../constants';
import MovieContext from '../../../../context';
import {MockOnClick} from '../../../../mocks/mockData';
import getGenres from '../../../../utils';

const EditMovie = ({title, movie}) => {
  const [optionSelected, setOptionSelected] = useState(getGenres(Genres, movie));

  const selectChange = (selected) => {
    setOptionSelected(selected);
  };

  const selectReset = () => {
    setOptionSelected(getGenres(Genres, movie));
  };

  const {activeModalWindow} = useContext(MovieContext);

  return (
    <>
      {activeModalWindow === 'editMovie' && (
      <>
        <span className="title">{title}</span>
        <form onSubmit={() => MockOnClick('form onSubmit', movie)} onReset={selectReset}>
          <div className="formInput">
            <label htmlFor="id" className="label">
              MOVIE ID
            </label>
            <input
              type="text"
              name="id"
              id="id"
              className="input"
              value={movie.id}
              readOnly
            />
          </div>
          <div className="formInput">
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="input"
              placeholder="Title here"
              defaultValue={movie.name}
              autoComplete="off"
            />
          </div>
          <div className="formInput">
            <label htmlFor="releaseDate" className="label">
              RELEASE DATE
            </label>
            <input
              type="date"
              name="releaseDate"
              id="releaseDate"
              className="input"
              placeholder="Select Date"
              defaultValue={movie.releaseDate}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="movieURL" className="label">
              MOVIE URL
            </label>
            <input
              type="text"
              name="movieURL"
              id="movieURL"
              className="input"
              placeholder="Movie URL here"
              defaultValue={movie.movieURL}
              autoComplete="off"
            />
          </div>
          <div className="formInput">
            <label htmlFor="genres" className="label">
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
              value={optionSelected}
            />
          </div>
          <div className="formInput">
            <label htmlFor="overview" className="label">
              OVERVIEW
            </label>
            <input
              type="text"
              name="overview"
              id="overview"
              className="input"
              placeholder="Overview here"
              defaultValue={movie.overview}
              autoComplete="off"
            />
          </div>
          <div className="formInput">
            <label htmlFor="runtime" className="label">
              RUNTIME
            </label>
            <input
              type="text"
              name="runtime"
              id="runtime"
              className="input"
              placeholder="Runtime here"
              defaultValue={movie.runtime}
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
      )}
    </>
  );
};

EditMovie.propTypes = {
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

EditMovie.defaultProps = {
  movie: null
};

export default EditMovie;
