import './ResultsSort.less';

import {head} from 'lodash';
import React, {useState} from 'react';

import Button from '../../components/Button';
import Select from '../../components/Select';
import SortIcon from '../../components/SortIcon';
import {SortBy} from '../../constants';
import useToggle from '../../hooks';

const ResultsSort = () => {
  const [sortBy, setSortBy] = useState(head(SortBy));
  const [sortOrderAsc, toggleSortOrder] = useToggle(false);

  const setSortByHandler = (selectItem) => {
    setSortBy(selectItem);

    // TODO with Redux dispatch(sortByValue(selectItem.value));
  };

  return (
    <div className="resultsSortContainer">
      <div className="sortBy">SORT BY</div>
      <Select
        className="select resultSortSelect"
        classNamePrefix="select"
        id="resultSort"
        options={SortBy}
        onChange={setSortByHandler}
        value={sortBy}
      />
      <Button className="arrow" onClick={toggleSortOrder}>
        <SortIcon sortOrderAsc={sortOrderAsc} />
      </Button>
    </div>
  );
};

export default ResultsSort;
