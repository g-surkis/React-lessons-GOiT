// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import { Component } from 'react';
import PropTypes from 'prop-types';

class Toggler extends Component {
    state = {
      isOpen: true,
    };

    toggle = () => this.setState((state) => ({ isOpen: !state.isOpen }));

    render() {
      return this.props.children({
        isOpen: this.state.isOpen,
        onToggle: this.toggle,
      });
    }
}

export default Toggler;

Toggler.propTypes = {
  children: PropTypes.func.isRequired,
};
