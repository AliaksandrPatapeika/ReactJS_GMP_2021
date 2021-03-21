import './HeaderTop.less';

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {closeMovieDetails, showModal} from '../../actions/movies';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const HeaderTop = () => {
  const activeMovieDetails = useSelector((state) => state.movie.activeMovieDetails);
  const dispatch = useDispatch();

  const closeMovieDetailsWindow = () => {
    dispatch(closeMovieDetails());
  };

  const showAddMovieWindow = () => {
    dispatch(showModal('addMovie'));
  };

  useEffect(() => {
    if (activeMovieDetails) {
      document.getElementById('returnToMainButton').focus();
    }
  }, [activeMovieDetails]);

  return (
    <div className="headerTopContainer">
      <Logo />
      {activeMovieDetails ? (
        <Button id="returnToMainButton" className="returnToMainButton" onClick={closeMovieDetailsWindow}>
          <i className="fa fa-search fa-flip-horizontal" aria-hidden="true" />
        </Button>
      ) : (
        <Button
          className="addMovieButton"
          onClick={showAddMovieWindow}
          title="+ ADD MOVIE"
        />
      )}
    </div>
  );
};

export default HeaderTop;
