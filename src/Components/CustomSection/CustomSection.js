/* eslint-disable no-console */
// @ts-nocheck

import React from 'react';
import './CustomSection.scss';
import classNames from 'classnames';
import ColorContext from '../../Contexts/ColorContext';

const CustomSection = () => (
  <div className="custom-section">
    <ColorContext.Consumer>
      {({ theme }) => {
        const styles = classNames('own-style',
          {
            'dark-theme': theme === 'dark',
            'white-theme': theme === 'white',
            'red-theme': theme === 'red',
          });
        return (<div className={styles}>CustomSection </div>);
      }}
    </ColorContext.Consumer>
  </div>
);

export default CustomSection;
