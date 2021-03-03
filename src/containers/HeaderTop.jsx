import '../less/containers/HeaderTop.less';

import React from 'react';

import AddMovieButton from '../components/AddMovieButton';
import Logo from '../components/Logo';

const HeaderTop = () => (
  <div className="headerTopContainer">
    <Logo />
    <AddMovieButton />
  </div>
);

export default HeaderTop;
