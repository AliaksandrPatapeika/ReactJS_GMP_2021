import './App.less';

import React from 'react';
import {Provider} from 'react-redux';

import store from '../../store';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';
import Main from '../Main';
import ModalWindow from '../ModalWindow';
import MovieDetails from '../MovieDetails';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Loading />
      <MovieDetails />
      <Header />
      <Main />
      <ModalWindow />
      <Footer />
    </ErrorBoundary>
  </Provider>
);

export default App;
