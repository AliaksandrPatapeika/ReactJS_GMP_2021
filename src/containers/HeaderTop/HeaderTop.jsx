import './HeaderTop.less';

import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {closeMovieDetails, showModal} from '../../actions/movies';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import {getQueryString} from '../../utils';

const HeaderTop = ({hideButton}) => {
  const activeMovieDetailsMovie = useSelector((state) => state.movie.activeMovieDetailsMovie);
  const query = useSelector((state) => state.query);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(closeMovieDetails());
    history.push({
      pathname: '/search',
      search: getQueryString(query)
    });
  };

  const showAddMovieWindow = () => {
    dispatch(showModal('addMovie'));
  };

  useEffect(() => {
    if (activeMovieDetailsMovie) {
      document.getElementById('returnToMainButton').focus();
    }
  }, [activeMovieDetailsMovie]);

  return (
    <div className="headerTopContainer">
      <Logo />
      {!hideButton && (
      <>
        {activeMovieDetailsMovie ? (
          <Button
            id="returnToMainButton"
            className="returnToMainButton"
            onClick={onClickHandler}
          >
            <i className="fa fa-search fa-flip-horizontal" aria-hidden="true" />
          </Button>
        ) : (
          <Button
            className="addMovieButton"
            onClick={showAddMovieWindow}
            title="+ ADD MOVIE"
          />
        )}
      </>
      )}
    </div>
  );
};

HeaderTop.propTypes = {
  hideButton: PropTypes.bool
};

HeaderTop.defaultProps = {
  hideButton: false
};

export default HeaderTop;
