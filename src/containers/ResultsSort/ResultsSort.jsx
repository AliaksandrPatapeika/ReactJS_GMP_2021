import './ResultsSort.less';

import {filter, head} from 'lodash';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setSortBy, setSortOrder} from '../../actions/movies';
import Button from '../../components/Button';
import Select from '../../components/Select';
import SortIcon from '../../components/SortIcon';
import {SortBy} from '../../constants';

const ResultsSort = () => {
  const sortBy = useSelector((state) => state.query.sortBy);
  const sortOrder = useSelector((state) => state.query.sortOrder);
  const dispatch = useDispatch();

  const getSortValue = () => head(
    filter(SortBy, (option) => option.value === sortBy)
  );

  const setSortByHandler = (selectItem) => {
    dispatch(setSortBy(selectItem.value));
  };

  const setSortOrderHandler = () => {
    dispatch(setSortOrder(sortOrder));
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
        value={getSortValue()}
      />
      <Button className="arrow" onClick={setSortOrderHandler}>
        <SortIcon sortOrder={sortOrder} />
      </Button>
    </div>
  );
};

export default ResultsSort;
