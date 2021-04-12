import './PageNotFound.less';

import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import errorPage from '../../img/errorPage.png';
import Footer from '../Footer';
import HeaderTop from '../HeaderTop';

const PageNotFound = () => (
  <>
    <div className="pageNotFoundContainer">
      <HeaderTop hideButton />
      <div className="pageNotFoundContent">
        <h1 className="title">Page Not Found</h1>
        <img
          src={errorPage}
          alt="page not found"
          className="errorPageImage"
        />
        <Link to="/">
          <Button className="goBackButton" title="GO BACK TO HOME" />
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default PageNotFound;
