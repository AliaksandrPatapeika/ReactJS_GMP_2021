import './HeaderMain.less';

import React from 'react';

import Search from '../Search';

const HeaderMain = () => (
  <div className="headerMainContainer">
    <h1 className="headerTitle">FIND YOUR MOVIE</h1>
    <Search />
  </div>
);

export default HeaderMain;
