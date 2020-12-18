// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import './CustomSection.scss';
import classNames from 'classnames';
import ColorContext from '../../ColorContext';

const CustomSection = () => (
  <div className="custom-section">

    <ColorContext.Consumer>
      {({ theme }) => {
        const styles = classNames('own-style',
          {
            'dark-theme': theme === 'dark',
            'white-theme': theme !== 'dark',
          });

        return (<div className={styles}>CustomSection </div>);
      }}
    </ColorContext.Consumer>

  </div>
);

export default CustomSection;
