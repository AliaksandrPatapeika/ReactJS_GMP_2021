import './ResultsFilter.less';

import React, {Component} from 'react';

import FilterItem from '../../components/FilterItem';
import {FilterItems} from '../../constants';

class ResultsFilter extends Component {
	state = {
	  filterItems: FilterItems,
	  activeFilterId: 1
	};

	// eslint-disable-next-line no-unused-vars
	setActiveFilterId = (id, genre) => {
	  this.setState({
	    activeFilterId: id
	  });

	  // TODO with Redux dispatch(filterBy(genre));
	};

	render() {
	  const {filterItems, activeFilterId} = this.state;

	  return (
  <nav>
    <ul className="resultsFilterContainer">
      {filterItems.map((item) => (
        <FilterItem
          name={item.name}
          key={item.id}
          isActive={item.id === activeFilterId}
          setActiveFilterId={() => this.setActiveFilterId(item.id, item.name)}
        />
      ))}
    </ul>
  </nav>
	  );
	}
}

export default ResultsFilter;
