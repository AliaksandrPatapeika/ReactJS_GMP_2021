import './ResultsSort.less';

import React, {useState} from 'react';

import arrowDown from '../../img/arrowDown.svg';
import Button from '../Button';

const ResultsSort = () => {
  const [sortOrderAsc, setSortOrder] = useState(false);
  const arrowClassName = sortOrderAsc ? 'arrow arrow-up' : 'arrow';
  const toggleSortSortOrder = () => {
    setSortOrder(!sortOrderAsc);
  };

  return (
    <div className="resultsSortContainer">
      <div className="sortBy">SORT BY</div>
      <div className="releaseDate">RELEASE DATE</div>
      <Button className={arrowClassName} onClick={toggleSortSortOrder}>
        <img src={arrowDown} alt="Sort Button" />
      </Button>
    </div>
  );
};

export default ResultsSort;
