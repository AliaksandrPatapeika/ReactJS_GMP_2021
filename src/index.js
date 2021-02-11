import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FunctionalComponent from './components/functionalComponent';
import ReactComponent from './components/reactComponent';
import ReactCreateElement from './components/reactCreateElement';
import ReactPureComponent from './components/reactPureComponent';
import reportWebVitals from './reportWebVitals';

const renderBlankMessage = document.getElementById('renderBlankMessage');
const createElement =  document.getElementById('createElement');
const components = document.getElementById('components');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<p className='test_class'>Hello World (Render blank message with React)</p>, renderBlankMessage);
ReactDOM.render(ReactCreateElement, createElement);
ReactDOM.render(
  <React.Fragment>
    <ReactComponent/>
    <ReactPureComponent/>
    <FunctionalComponent/>
  </React.Fragment>,
  components);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
