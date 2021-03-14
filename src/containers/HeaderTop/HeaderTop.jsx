import './HeaderTop.less';

import React, {useContext, useEffect} from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import MovieContext from '../../context';

const HeaderTop = () => {
  const {
    showModalWindow, activeMovieDetails, activeMovieDetailsMovie, closeMovieDetails
  } = useContext(MovieContext);

  useEffect(() => {
    if (activeMovieDetails) {
      document.getElementById('returnToMainButton').focus();
    }
  }, [activeMovieDetails, activeMovieDetailsMovie]);

  const showAddMovieWindow = () => {
    showModalWindow('addMovie');
  };

  return (
    <div className="headerTopContainer">
      <Logo />
      {activeMovieDetails ? (
        <Button id="returnToMainButton" className="returnToMainButton" onClick={closeMovieDetails}>
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
