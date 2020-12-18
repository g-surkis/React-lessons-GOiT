/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Header, Footer, Menu } from 'Components';
import './MainLayout.scss';

const Layout = ({ leftSidebar = null, rightSidebar = null, content }) => (
  <div className="layout">
    <Header />
    <div className="d-flex main">
      <div className="left-sidebar">
        <Menu />
        {leftSidebar }
      </div>
      <div className="main-content">
        {content}
      </div>
      <div className="right-sidebar">
        {rightSidebar }
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {

};

export default Layout;
