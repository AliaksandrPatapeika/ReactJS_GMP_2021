import './Header.less';

import React from 'react';

import Blur from '../../components/Blur';
import ModalWindowContext from '../../context';
import HeaderMain from '../HeaderMain';
import HeaderTop from '../HeaderTop';

const Header = () => (
  <ModalWindowContext.Consumer>
    {({activeModalWindow}) => (
      <header className={activeModalWindow ? 'headerContainer disabled' : 'headerContainer'}>
        <Blur>
          <HeaderTop />
          <HeaderMain />
        </Blur>
      </header>
    )}
  </ModalWindowContext.Consumer>
);

export default Header;
