import './App.less';

import React from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const App = () => (
  <ErrorBoundary>
    <Header />
    <Main />
    <Footer />
  </ErrorBoundary>
);

export default App;
