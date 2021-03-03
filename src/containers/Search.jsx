import '../less/containers/Search.less';

import React from 'react';

import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';

const Search = () => (
  <div className="searchContainer">
    <SearchInput />
    <SearchButton />
  </div>
);

export default Search;
