import './App.less';

import React, {useState} from 'react';

import MovieContext from '../../context';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
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
    <ErrorBoundary>
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
        <MovieDetails />
        <Header />
        <Main />
        <ModalWindow />
      </MovieContext.Provider>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
