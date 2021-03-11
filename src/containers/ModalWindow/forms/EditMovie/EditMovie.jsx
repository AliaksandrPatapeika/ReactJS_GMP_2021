import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import {Genres} from '../../../../constants';
import {MockOnClick} from '../../../../mocks/mockData';
import Utils from '../../../../utils';

class EditMovie extends Component {
	state = {
	  // eslint-disable-next-line react/destructuring-assignment
	  optionSelected: Utils.getGenres(Genres, this.props.movie)
	};

	selectChange = (selected) => {
	  this.setState({
	    optionSelected: selected
	  });
	};

	selectReset = () => {
	  const {movie} = this.props;

	  this.setState({
	    optionSelected: Utils.getGenres(Genres, movie)
	  });
	};

	render() {
	  const {optionSelected} = this.state;
	  const {
	    title, movie, movie: {
	      id, description, releaseDate, url
	    }
	  } = this.props;

	  return (
  <>
    <span className="title">{title}</span>
    <form onSubmit={() => MockOnClick('form onSubmit', movie)} onReset={this.selectReset}>
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
        <label htmlFor="title" className="label">
          TITLE
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="input"
          placeholder="Title here"
          defaultValue={description}
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
          defaultValue={releaseDate}
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
          defaultValue={url}
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
          onChange={this.selectChange}
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
          defaultValue="Overview text goes here"
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
          defaultValue="Runtime text Goes here"
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
	}
}

EditMovie.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }).isRequired
};
export default EditMovie;
