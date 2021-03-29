import './Search.less';

import React from 'react';

import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

const Search = () => (
  <div className="searchContainer">
    <SearchInput />
    <Button className="searchButton" title="SEARCH" />
  </div>
);

export default Search;
