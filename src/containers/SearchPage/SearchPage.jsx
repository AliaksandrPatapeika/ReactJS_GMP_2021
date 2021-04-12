import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';
import Main from '../Main';
import ModalWindow from '../ModalWindow';

const SearchPage = () => (
  <>
    <Loading />
    <Header />
    <Main />
    <ModalWindow />
    <Footer />
  </>
);

export default SearchPage;
