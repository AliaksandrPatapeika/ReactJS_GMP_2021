import '../less/containers/Menu.less';

import React from 'react';

import ResultsSort from '../components/ResultsSort';
import ResultsFilter from './ResultsFilter';

const Menu = () => (
  <div className="menuContainer">
    <ResultsFilter />
    <ResultsSort />
  </div>
);

export default Menu;
