import './ResultsFilter.less';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {setActiveFilter} from '../../actions/movies';
import FilterItem from '../../components/FilterItem';
import {FilterItems} from '../../constants';

const ResultsFilter = () => {
  const genres = {filterItems: FilterItems};
  const activeFilter = useSelector((state) => state.query.activeFilter);
  const dispatch = useDispatch();

  const setActiveFilterHandler = (id, genre) => {
    dispatch(setActiveFilter(genre));
  };

  return (
    <nav>
      <ul className="resultsFilterContainer">
        {genres.filterItems.map((item) => (
          <FilterItem
            name={item.name}
            key={item.id}
            isActive={item.name === activeFilter}
            setActiveFilter={() => setActiveFilterHandler(item.id, item.name)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ResultsFilter;
