import './ResultsFilter.less';

import React, {useState} from 'react';

import FilterItem from '../../components/FilterItem';

const ResultsFilter = () => {
  const filterItems = [
    {id: 1, name: 'ALL'},
    {id: 2, name: 'DOCUMENTARY'},
    {id: 3, name: 'COMEDY'},
    {id: 4, name: 'HORROR'},
    {id: 5, name: 'CRIME'}
  ];
  const [activeFilterId, setActiveFilterId] = useState(1);

  const setFilterId = (id) => {
    setActiveFilterId(id);
  };

  return (
    <nav>
      <ul className="resultsFilterContainer">
        {filterItems.map((item) => (
          <FilterItem
            name={item.name}
            key={item.id}
            isActive={item.id === activeFilterId}
            setFilterId={() => setFilterId(item.id)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ResultsFilter;
