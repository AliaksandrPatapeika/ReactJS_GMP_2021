import './ModalWindow.less';

import React, {Component} from 'react';

import Blur from '../../components/Blur';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import ModalWindowContext from '../../context';
import AddMovie from './forms/AddMovie';
import DeleteMovie from './forms/DeleteMovie';
import EditMovie from './forms/EditMovie';

class ModalWindow extends Component {
  componentDidUpdate() {
    const {activeModalWindow} = this.context;

    if (activeModalWindow) {
      window.addEventListener('keydown', this.handleKeyDown);
    } else {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

	handleKeyDown = (event) => {
	  const {closeModalWindow} = this.context;

	  if (event.key === 'Escape') {
	    closeModalWindow();
	  }
	}

	render() {
	  const {activeModalWindow, activeMovie, closeModalWindow} = this.context;

	  return (
  <>
    {activeModalWindow && (
    <div className="modalWindowContainer">
      <Blur>
        <Logo />
        <div className="modalWindow">
          <Button className="closeButton" onClick={closeModalWindow}>
            <i className="fa fa-times" aria-hidden="true" />
          </Button>
          <div className="modalBody">
            {activeModalWindow === 'addMovie' && (
            <AddMovie title="ADD MOVIE" />
            )}
            {activeModalWindow === 'editMovie' && (
            <EditMovie title="EDIT MOVIE" movie={activeMovie} />
            )}
            {activeModalWindow === 'deleteMovie' && (
            <DeleteMovie title="DELETE MOVIE" movie={activeMovie} />
            )}
          </div>
        </div>
      </Blur>
    </div>
    )}
  </>
	  );
	}
}

ModalWindow.contextType = ModalWindowContext;

export default ModalWindow;
