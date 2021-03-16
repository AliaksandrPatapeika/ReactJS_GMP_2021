import './ModalWindow.less';

import React, {useCallback, useContext, useEffect} from 'react';

import Blur from '../../components/Blur';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import MovieContext from '../../context';
import AddMovie from './forms/AddMovie';
import DeleteMovie from './forms/DeleteMovie';
import EditMovie from './forms/EditMovie';

const ModalWindow = () => {
  const {activeModalWindow, activeModalMovie, closeModalWindow} = useContext(MovieContext);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        closeModalWindow();
      }
    },
    [closeModalWindow]
  );

  useEffect(() => {
    if (activeModalWindow) {
      window.addEventListener('keydown', handleKeyDown);
      document.getElementById('modalWindowCloseButton').focus();
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalWindow, handleKeyDown]);

  return (
    <>
      {activeModalWindow && (
      <div className="modalWindowContainer">
        <Blur>
          <Logo />
          <div className="modalWindow">
            <Button id="modalWindowCloseButton" className="closeButton" onClick={closeModalWindow}>
              <i className="fa fa-times" aria-hidden="true" />
            </Button>
            <div className="modalBody">
              <AddMovie formTitle="ADD MOVIE" />
              <EditMovie formTitle="EDIT MOVIE" movie={activeModalMovie} />
              <DeleteMovie formTitle="DELETE MOVIE" movie={activeModalMovie} />
            </div>
          </div>
        </Blur>
      </div>
      )}
    </>
  );
};

export default ModalWindow;
