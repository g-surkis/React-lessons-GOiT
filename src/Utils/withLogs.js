/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { Component } from 'react';

const withLog = (WrappedComponent) => class WithLog extends Component {
  componentDidUpdate() {
    if (this.props.list.length) {
      console.group(`WithLog ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

export default withLog;
