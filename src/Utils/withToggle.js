/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

const withToggle = (WrappedComponent) => class WithToggle extends Component {
      state = {
        isOpen: true,
      };

      toggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

      render() {
        const { isOpen } = this.state;
        return (
          <div className="d-flex justify-content-between">
            <button type="button" onClick={this.toggle} style={{ height: '25px' }}>
              {this.state.isOpen ? 'Hide' : 'Show'}
            </button>

            {isOpen && <WrappedComponent {...this.props} />}
          </div>
        );
      }
};

export default withToggle;
