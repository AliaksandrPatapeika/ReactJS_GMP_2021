import './Search.less';

import React from 'react';

import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import {MockOnClick} from '../../mocks/mockData';

const Search = () => (
  <div className="searchContainer">
    <SearchInput />
    <Button className="searchButton" onClick={() => MockOnClick('searchButton')} title="SEARCH" />
  </div>
);

export default Search;
