import React from 'react';

import Footer from '../Footer';
import Loading from '../Loading';
import Main from '../Main';
import MovieDetails from '../MovieDetails';

const MovieDetailsPage = () => (
  <>
    <Loading />
    <MovieDetails />
    <Main />
    <Footer />
  </>
);

export default MovieDetailsPage;
