import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import ValidationErrorMessage from '../../../../components/ValidationErrorMessage';
import {Genres} from '../../../../constants';
import FormItem from '../FormItem';

const CommonForm = ({formik, isEdit}) => (
  <>
    {isEdit && (
    <FormItem label="MOVIE ID" name="id" readOnly />
    )}
    <FormItem name="title" required />
    <FormItem
      type="date"
      name="release_date"
      className={formik.values.release_date ? 'input valid-date' : 'input'}
      placeholder="Select Date"
      required
    />
    <FormItem name="poster_path" label="MOVIE URL" placeholder="Movie URL here" />
    <FormItem
      className="select"
      classNamePrefix="select"
      name="genres"
      label="GENRE"
      options={Genres}
      placeholder="Select Genre"
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      allowSelectAll
      allSelectedLabel="All genres"
      component={Select}
      value={formik.values.genres}
      required
      onChange={(event) => {
			  formik.handleChange({
			    target: {
			      name: 'genres',
			      value: event
			    }
			  });
      }}
    />
    {
			formik.errors.genres
			&& <ValidationErrorMessage>{formik.errors.genres}</ValidationErrorMessage>
		}
    <FormItem name="overview" required />
    <FormItem name="runtime" required />
    <FormItem name="budget" />
    <FormItem name="revenue" />
    <FormItem name="tagline" required />
    <FormItem name="vote_average" />
    <FormItem name="vote_count" />
    <div className="modalFooter">
      <Button
        type="reset"
        className="button"
        title="RESET"
      />
      <Button
        type="submit"
        className="button"
        title={isEdit ? 'SAVE' : 'SUBMIT'}
        disabled={!formik.isValid}
      />
    </div>
  </>
);

CommonForm.propTypes = {
  formik: PropTypes.instanceOf(Object).isRequired,
  isEdit: PropTypes.bool
};

CommonForm.defaultProps = {
  isEdit: false
};

export default CommonForm;
