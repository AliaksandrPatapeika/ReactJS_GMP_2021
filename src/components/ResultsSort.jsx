import '../less/components/ResultsSort.less';

import React, {useState} from 'react';

const ResultsSort = () => {
  const [sortOrderAsc, setSortOrder] = useState(false);
  const className = sortOrderAsc ? 'arrow arrow-up' : 'arrow arrow-down';
  const toggleSortSortOrder = () => {
    setSortOrder(!sortOrderAsc);
  };

  return (
    <div className="resultsSortContainer">
      <div className="sortBy">SORT BY</div>
      <div className="releaseDate">RELEASE DATE</div>
      <div
        role="button"
        tabIndex="0"
        aria-label="Sort Button"
        className={className}
        onClick={toggleSortSortOrder}
        onKeyDown={toggleSortSortOrder}
      />
    </div>
  );
};

export default ResultsSort;
