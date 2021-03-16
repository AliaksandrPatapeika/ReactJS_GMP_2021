import './MovieReleaseDate.less';

import PropTypes from 'prop-types';
import React from 'react';

const MovieReleaseDate = ({year}) => <div className="movieReleaseDate">{year}</div>;

MovieReleaseDate.propTypes = {
  year: PropTypes.number.isRequired
};

export default MovieReleaseDate;
