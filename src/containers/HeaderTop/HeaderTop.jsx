import './HeaderTop.less';

import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import {MockOnClick} from '../../mocks/mockData';

const HeaderTop = () => (
  <div className="headerTopContainer">
    <Logo />
    <Button className="addMovieButton" onClick={() => MockOnClick('addMovieButton')} title="+ ADD MOVIE" />
  </div>
);

export default HeaderTop;
