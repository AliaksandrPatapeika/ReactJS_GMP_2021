import './Header.less';

import React from 'react';

import HeaderMain from '../HeaderMain';
import HeaderTop from '../HeaderTop';

const Header = () => (
  <header className="headerContainer">
    <div className="headerBlurImageLayer">
      <HeaderTop />
      <HeaderMain />
    </div>
  </header>
);

export default Header;
