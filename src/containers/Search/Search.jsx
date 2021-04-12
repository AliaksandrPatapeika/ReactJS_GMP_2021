import './Search.less';

import {assign} from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';

import Button from '../../components/Button';
import {getQueryString} from '../../utils';
import SearchInput from '../SearchInput';

const Search = () => {
  const location = useLocation();
  const query = useSelector((state) => state.query);
  const url = new URLSearchParams(location.search);
  const [value, setValue] = useState(url.get('search') || '');
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickHandler = () => {
    history.push({
      pathname: '/search',
      search: getQueryString(assign(query, {search: value}))
    });
  };
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, value, handleKeyDown]);
  return (
    <div className="searchContainer">
      <SearchInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        id="searchButton"
        className="searchButton"
        title="SEARCH"
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Search;
