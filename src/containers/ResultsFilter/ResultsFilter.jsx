import './ResultsFilter.less';

import {assign} from 'lodash';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

import {setFilter} from '../../actions/movies';
import FilterItem from '../../components/FilterItem';
import {FilterItems} from '../../constants';
import {getQueryString} from '../../utils';

const ResultsFilter = () => {
  const genres = {filterItems: FilterItems};
  const {id} = useParams();
  const filter = useSelector((state) => state.query.filter);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const history = useHistory();

  const setFilterHandler = (genre) => {
    /* for the filtering when the film details page is open */
    if (id) {
      dispatch(setFilter(genre));
    } else {
      history.push({
        pathname: '/search',
        search: getQueryString(assign(query, {filter: genre}))
      });
    }
  };

  return (
    <nav>
      <ul className="resultsFilterContainer">
        {genres.filterItems.map((item) => (
          <FilterItem
            label={item.label}
            key={item.id}
            isActive={item.value === filter}
            setFilter={() => setFilterHandler(item.value)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default ResultsFilter;
