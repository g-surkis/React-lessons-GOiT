/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
// @ts-nocheck
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { MainLayout, Switcher } from 'Components';

// import './ComicsContainer.scss';

class AnimationContainer extends Component {
  render() {
    return (
      <MainLayout
        content={(
          <div className="animation-container">
            <Switcher />
          </div>
)}

      />
    );
  }
}

export default AnimationContainer;
