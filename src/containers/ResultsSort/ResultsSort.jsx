import './ResultsSort.less';

import {head} from 'lodash';
import React, {Component} from 'react';

import Button from '../../components/Button';
import Select from '../../components/Select';
import SortIcon from '../../components/SortIcon';
import {SortBy} from '../../constants';

class ResultsSort extends Component {
	state = {
	  sortOrderAsc: false,
	  sortBy: head(SortBy)
	};

	toggleSortOrder = () => {
	  this.setState(({sortOrderAsc}) => ({
	    sortOrderAsc: !sortOrderAsc
	  }));
	};

	setSortBy = (selectItem) => {
	  this.setState(() => ({
	    sortBy: selectItem
	  }));

	  // TODO with Redux dispatch(sortBy(selectItem.value));
	};

	render() {
	  const {sortOrderAsc, sortBy} = this.state;

	  return (
  <div className="resultsSortContainer">
    <div className="sortBy">SORT BY</div>
    <Select
      className="select resultSortSelect"
      classNamePrefix="select"
      id="resultSort"
      options={SortBy}
      onChange={this.setSortBy}
      value={sortBy}
    />
    <Button className="arrow" onClick={this.toggleSortOrder}>
      <SortIcon sortOrderAsc={sortOrderAsc} />
    </Button>
  </div>
	  );
	}
}

export default ResultsSort;
