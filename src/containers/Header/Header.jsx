import React, {useContext} from 'react';

import Blur from '../../components/Blur';
import MovieContext from '../../context';
import HeaderMain from '../HeaderMain';
import HeaderTop from '../HeaderTop';

const Header = () => {
  const {activeModalWindow, activeMovieDetails} = useContext(MovieContext);

  return (
    <>
      {!activeModalWindow && !activeMovieDetails && (
      <header className="headerContainer">
        <Blur>
          <HeaderTop />
          <HeaderMain />
        </Blur>
      </header>
      )}
    </>
  );
};

export default Header;
