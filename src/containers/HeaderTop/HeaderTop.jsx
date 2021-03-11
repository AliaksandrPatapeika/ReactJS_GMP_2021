import './HeaderTop.less';

import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import ModalWindowContext from '../../context';

const HeaderTop = () => (
  <ModalWindowContext.Consumer>
    {({showModalWindow}) => (
      <div className="headerTopContainer">
        <Logo />
        <Button className="addMovieButton" onClick={() => showModalWindow('addMovie')} title="+ ADD MOVIE" />
      </div>
    )}
  </ModalWindowContext.Consumer>
);

export default HeaderTop;
