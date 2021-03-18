import './App.less';

import React, {useState} from 'react';
import {Provider} from 'react-redux';

import MovieContext from '../../context';
import store from '../../store';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';
import Main from '../Main';
import ModalWindow from '../ModalWindow';
import MovieDetails from '../MovieDetails';

const App = () => {
  const [modalWindow, setModalWindow] = useState({
    activeModalWindow: false,
    activeModalMovie: null
  });
  const [movieDetails, setMovieDetails] = useState({
    activeMovieDetails: false,
    activeMovieDetailsMovie: null
  });

  const showModalWindow = (activeModalWindow, activeModalMovie) => {
    setModalWindow(() => ({
      activeModalWindow,
      activeModalMovie
    }));
  };

  const closeModalWindow = () => {
    setModalWindow(() => ({
      activeModalWindow: false,
      activeModalMovie: null
    }));
  };

  const showMovieDetails = (activeMovieDetailsMovie) => {
    setMovieDetails(() => ({
      activeMovieDetails: true,
      activeMovieDetailsMovie
    }));
  };

  const closeMovieDetails = () => {
    setMovieDetails(() => ({
      activeMovieDetails: false,
      activeMovieDetailsMovie: null
    }));
  };

  return (
    <Provider store={store}>
      <ErrorBoundary>
        {/* TODO refactor it with redux */}
        <MovieContext.Provider value={{
				  // State
				  activeModalWindow: modalWindow.activeModalWindow,
				  activeModalMovie: modalWindow.activeModalMovie,
				  activeMovieDetails: movieDetails.activeMovieDetails,
				  activeMovieDetailsMovie: movieDetails.activeMovieDetailsMovie,
				  // Actions
				  showModalWindow,
				  closeModalWindow,
				  showMovieDetails,
				  closeMovieDetails
        }}
        >
          <Loading />
          <MovieDetails />
          <Header />
          <Main />
          <ModalWindow />
        </MovieContext.Provider>
        <Footer />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
