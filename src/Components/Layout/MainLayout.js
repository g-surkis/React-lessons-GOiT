/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
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
  leftSidebar: PropTypes.element,
  rightSidebar: PropTypes.element,
  content: PropTypes.element,
};
Layout.defaultProps = {
  leftSidebar: null,
  rightSidebar: null,
  content: null,
};

export default Layout;
