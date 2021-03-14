import './ResultsFilter.less';

import React, {useState} from 'react';

import FilterItem from '../../components/FilterItem';
import {FilterItems} from '../../constants';

const ResultsFilter = () => {
  const genres = {
    filterItems: FilterItems
  };

  const [activeFilterId, setActiveFilterId] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const setActiveFilter = (id, genre) => {
    setActiveFilterId(id);

    // TODO with Redux dispatch(filterByGenre(genre));
  };

  return (
    <nav>
      <ul className="resultsFilterContainer">
        {genres.filterItems.map((item) => (
          <FilterItem
            name={item.name}
            key={item.id}
            isActive={item.id === activeFilterId}
            setActiveFilterId={() => setActiveFilter(item.id, item.name)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ResultsFilter;
