import '../../ModalWindow.less';

import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import {Genres} from '../../../../constants';
import {MockOnClick} from '../../../../mocks/mockData';

class AddMovie extends Component {
	state = {
	  optionSelected: null
	};

	selectChange = (selected) => {
	  this.setState({
	    optionSelected: selected
	  });
	};

	selectReset = () => {
	  this.setState({
	    optionSelected: null
	  });
	};

	render() {
	  const {optionSelected} = this.state;
	  const {title} = this.props;

	  return (
  <>
    <span className="title">{title}</span>
    <form onSubmit={() => MockOnClick('form onSubmit')} onReset={this.selectReset}>
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
          defaultValue="Moana"
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
          title="SUBMIT"
        />
      </div>
    </form>
  </>
	  );
	}
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired
};
export default AddMovie;
