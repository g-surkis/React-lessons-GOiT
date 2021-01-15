/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

const asyncComponent = ({ loader, loading: Loading }) => class AsyncComponent extends Component {
      state = {
        component: null,
      };

      async componentDidMount() {
        console.log('async componentDidMount: ');
        const { default: component } = await loader();
        this.setState({ component });
      }

      render() {
        const { component: LoadedComponent } = this.state;

        return LoadedComponent ? (
          <LoadedComponent />
        ) : (
          <Loading />
        );
      }
};

export default asyncComponent;
