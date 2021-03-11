import './App.less';

import React, {Component} from 'react';

import ModalWindowContext from '../../context';
import ErrorBoundary from '../ErrorBoundary';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import ModalWindow from '../ModalWindow';

class App extends Component {
	state = {
	  activeModalWindow: false,
	  activeMovie: null
	};

	showModalWindow = (activeModalWindow, activeMovie) => {
	  this.setState({
	    activeModalWindow,
	    activeMovie
	  });
	};

	closeModalWindow = () => {
	  this.setState({
	    activeModalWindow: false,
	    activeMovie: null
	  });
	};

	render() {
	  const {activeModalWindow, activeMovie} = this.state;

	  return (
  <ErrorBoundary>
    <ModalWindowContext.Provider value={{
				  activeModalWindow,
				  activeMovie,
				  showModalWindow: this.showModalWindow,
				  closeModalWindow: this.closeModalWindow
    }}
    >
      <Header />
      <Main />
      <ModalWindow />
    </ModalWindowContext.Provider>
    <Footer />
  </ErrorBoundary>
	  );
	}
}

export default App;
